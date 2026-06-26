import http.server
import socketserver
import json
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def generate_markdown_report(data, filepath):
    try:
        # Extract general stats
        daily = data.get("daily", {})
        hrs = data.get("hrs", {})
        mocks = data.get("mocks", [])
        subs = data.get("subs", [])
        missed = data.get("missed", [])
        pomo_history = data.get("pomoHistory", [])
        
        # Calculate stats
        tot_hours = sum(hrs.values())
        
        tot_topics = 0
        done_topics = 0
        subject_stats = {}
        for s in subs:
            s_tot = 0
            s_done = 0
            for u in s.get("u", []):
                for t in u.get("t", []):
                    tot_topics += 1
                    s_tot += 1
                    if t.get("s") == "D":
                        done_topics += 1
                        s_done += 1
            subject_stats[s.get("sh", s.get("id"))] = {
                "name": s.get("nm"),
                "total": s_tot,
                "done": s_done,
                "pct": round(s_done / s_tot * 100) if s_tot > 0 else 0,
                "weight": s.get("w", 0),
                "hours": hrs.get(s.get("id"), 0)
            }
            
        comp_pct = round(done_topics / tot_topics * 100) if tot_topics > 0 else 0
        
        done_mocks = [m for m in mocks if m.get("sc") is not None]
        avg_mock = round(sum(m["sc"] for m in done_mocks) / len(done_mocks)) if done_mocks else 0
        best_mock = max(m["sc"] for m in done_mocks) if done_mocks else 0
        
        # Rank Milestone
        xp = tot_hours * 10 + comp_pct * 100
        rank_title = "🌱 Novice Aspirant"
        if xp >= 6000:
            rank_title = "🔥 AIR 1 Contender"
        elif xp >= 4000:
            rank_title = "👑 Rank Master"
        elif xp >= 2000:
            rank_title = "🎯 Mock Champion"
        elif xp >= 800:
            rank_title = "📜 PYQ Warrior"
        elif xp >= 200:
            rank_title = "📖 Concept Builder"
            
        md = []
        md.append(f"# GATE 2026 (Feb 2027) Study Analysis Report — Abhishek")
        md.append(f"Auto-generated on your local machine.")
        md.append("")
        md.append(f"## 🏆 Current Progress & Rank Summary")
        md.append(f"- **Rank Badge**: `{rank_title}`")
        md.append(f"- **Total XP**: `{xp} XP`")
        md.append(f"- **Total Study Hours Logged**: `{tot_hours:.1f}h`")
        md.append(f"- **Syllabus Completion**: `{comp_pct}%` ({done_topics}/{tot_topics} topics done)")
        md.append(f"- **Mock Tests**: `{len(done_mocks)}/15 completed` (Avg: `{avg_mock}%` | Best: `{best_mock}%`) ")
        md.append(f"- **Current Backlog Alert**: `{len(missed)} missed days`")
        md.append("")
        
        md.append(f"## 📚 Subject-wise Performance")
        md.append("| Subject | Weight | Progress % | Done/Total | Hours Spent |")
        md.append("| --- | --- | --- | --- | --- |")
        for sh, st in subject_stats.items():
            md.append(f"| **{sh}** ({st['name']}) | {st['weight']}% | `{st['pct']}%` | {st['done']}/{st['total']} | {st['hours']:.1f}h |")
        md.append("")
        
        md.append(f"## 🎯 Mock Performance Tracker")
        if done_mocks:
            md.append("| Mock # | Date | Score | Sub-marks & Notes |")
            md.append("| --- | --- | --- | --- |")
            for m in done_mocks:
                notes = m.get("notes", "").replace("\n", " ")
                sub_str = ", ".join([f"{k}:{v}" for k, v in m.get("sub", {}).items() if v is not None])
                md.append(f"| #{m.get('n')} | {m.get('dt', 'N/A').split(' ')[0]} | **{m.get('sc')}%** | {sub_str} <br> *Notes:* {notes} |")
        else:
            md.append("*No mock scores logged yet. Start testing yourself!*")
        md.append("")
        
        md.append(f"## 📋 Focus History (Pomodoro Sessions)")
        if pomo_history:
            md.append("| Subject | Date & Time | Duration | Status |")
            md.append("| --- | --- | --- | --- |")
            # Show last 25 sessions
            for p in reversed(pomo_history[-25:]):
                dt = p.get("dt", "N/A")
                dur = p.get("dur", 25)
                sub = p.get("sub", "N/A")
                status = p.get("status", "Completed")
                md.append(f"| **{sub}** | {dt} | {dur} min | {status} |")
        else:
            md.append("*No focus sessions recorded yet. Turn on Focus Timer to log sessions!*")
        md.append("")
        
        md.append(f"## 📝 Daily Study Journal (Last 15 Entries)")
        sorted_daily = sorted(daily.items(), key=lambda x: x[0], reverse=True)
        if sorted_daily:
            md.append("| Date | Hours | Comp % | Mood | Notes |")
            md.append("| --- | --- | --- | --- | --- |")
            moods = ['😩','😔','😐','😊','🔥']
            for date, entry in sorted_daily[:15]:
                h = entry.get("hours", 0)
                dn = entry.get("done", 0)
                m = entry.get("mood", 3)
                mood_emoji = moods[m-1] if 1 <= m <= len(moods) else '😐'
                notes = entry.get("notes", "").replace("\n", " ")
                md.append(f"| {date} | {h}h | {dn}% | {mood_emoji} | {notes} |")
        else:
            md.append("*No daily logs written yet.*")
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write("\n".join(md))
    except Exception as e:
        print(f"Error compiling markdown report: {str(e)}")

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == '/api/save':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode('utf-8'))
                
                # Save data to analysis.json
                filepath_json = os.path.join(DIRECTORY, 'analysis.json')
                with open(filepath_json, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2)
                
                # Generate human-readable analysis.md
                filepath_md = os.path.join(DIRECTORY, 'analysis.md')
                generate_markdown_report(data, filepath_md)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(b'{"status":"success"}')
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(f'{{"error":"{str(e)}"}}'.encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        # Handle CORS preflight
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    pass

if __name__ == '__main__':
    print(f"Starting server in directory: {DIRECTORY}")
    server = ThreadingHTTPServer(('localhost', PORT), MyHandler)
    print(f"Serving at http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
        server.server_close()
        sys.exit(0)
