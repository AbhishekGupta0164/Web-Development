// import { useState } from "react"

import { useEffect } from "react"
import { useState } from "react"

// import { useState } from "react"
// import Home from "./Home"

// const App = () => {
//        let [count,SetCount]=    useState(0)
//   function fun1(){
//     SetCount(count+1)

//   }
//   return (
//     <div>
//       <h3>{count}</h3>
//        <button onClick={fun1}>click</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// const App = () => {
//        let [color,SetColor]=     useState("red")
//        function fun1(){
//         SetColor("green")
//        }
//   return (
//     <div style={{backgroundColor:color,height:"100vh"}}>
//       <button  onClick={fun1}>red</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }
// const Home = () => {
//   return (
//     <div>Helllooo</div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//     <Home/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'
// import {New}  from './Home'
// const App = () => {
//   return (
//     <div>
//     <Home/>
//     <New/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'

//  // App->Home->A->B->C

// const App = () => {
//   let user="ankittt"
//   return (
//     <div><Home  data={user}/></div>
//   )
// }

// export default App



// const App = () => {
//   // let count=0
//       let [count,SetCount]=    useState(0)
//       function fun1(){
//         SetCount(count+1)
//         // count++
//       }

//   return (
//     <div>
//       <h4>{count}</h4>
//       <button onClick={fun1}>click</button>
//       <Home/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import New from "./New"
// import {About} from './New'

// const App = () => {
//   return (
//     <div>
//       <New/>
//       <About/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'
// const App = () => {
//   let data="hello"
//   return (
//     <div>
//       <Home a={data}/>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Home from './Home'

// const App = () => {
//   // let count=0
//   let [count,SetCount]=   useState(0)
  
//   function fun1(){
//     SetCount(count+1)
  
//   }
//   function fun2(){
//     SetCount(count-1)
  
//   }
//   function fun3(){
//     SetCount(0)
  
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={fun1}>++</button>
//       <button onClick={fun2}>--</button>
//       <button onClick={fun3}>reset</button>


   
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// const App = () => {
//             let [input,SetInput]=     useState("")
//             let [data,SetData]=     useState('')
//   function fun1(e){
//     // console.log(e.target.value);
//     SetInput(e.target.value) 
//   }
//   function done(){
//     SetData(input)

//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input type='text' name='input'  placeholder='Enter your name' onChange={fun1}/>
//       <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//             let [input,SetInput]=      useState("")
//             let [data,SetData]=      useState("")
//   function fun1(e){
//     // console.log(e.target.type);
//     SetInput(e.target.value) 
//   }
//   function done(){
//     SetData(input)
//     SetInput("")

//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input   type='text'  name='input'  value={input}  onChange={fun1}/>
//       <button onClick={done}>click</button>
//       {/* <input type='email'/> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App





import './App.css'
const App = () => {
      let [ApiData,SetApiData]=    useState([])
      useEffect(()=>{
              //  console.log("hello"); 
              async  function call(){
                let res=  await  fetch("https://dummyjson.com/products")
                let data=        await   res.json()
                console.log(data.products);
                SetApiData(data.products)
              }
              call()
      },[])
      
  return (
    <div id="parent_div"   className="">
        {
          ApiData.map((a)=>{
               return(
                <div id="card">
                  <h1>{a.id}</h1>
                  <img  src={a.thumbnail}/>
                </div>
               )
          })
        }
    </div>
  )
}

export default App