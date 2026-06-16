// import React, { useEffect, useState } from 'react'
// const Task = () => {
//     let [search, SetSearch] = useState("")
//     let [ApiData, SetApiData] = useState([])
//     console.log(search);
//     async function apiCall() {
//         console.log("byeyeyeyeyeey");
//         if (!search.trim()) {
//             alert("kuch bhi nhi")
//             return;
//         }
//         let res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
//         let data = await res.json()
//         console.log(data);
//         SetApiData(data.products)

import { useEffect, useState } from "react"


//     }
//     useEffect(() => {
//         fetch('https://dummyjson.com/products').then((res) => {
//             return res.json()

//         }).then((data) => {
//             console.log(data);
//             SetApiData(data.products)


//         })
//     }, [])

//     function fun1(){
//         console.log("dortt");
        
//        let sortData= [...ApiData].sort((a,b)=>{
//              return a.price-b.price

//         })
//         SetApiData(sortData)
//         console.log(sortData,"hello");
        

//     }
//     function fun2(){
//         console.log("dortt");
        
//        let sortData= [...ApiData].sort((a,b)=>{
//              return b.price-a.price

//         })
//         SetApiData(sortData)
//         console.log(sortData,"hello");
        

//     }



//     return (
//         <div>
//             <input onChange={(e) => SetSearch(e.target.value)} />
//             <button onClick={apiCall}>click</button>
//             <button onClick={fun1}>low</button>
//             <button onClick={fun2}>high</button>


//             {
//                 ApiData.map((a) => {
//                     return (<div>
//                         <img src={a.
//                             thumbnail
//                         } />
//                         <h3>{a.id}</h3>
//                         <h3>{a.price}</h3>


//                     </div>)
//                 })
//             }
//         </div>
//     )
// }

// export default Task




// [2,1,4,5]

// <a-b></a-b>

const Task = () => {
    let [search,SetSearch]=   useState('')
       let [ApiData,SetApiData]=   useState([])
    // console.log(search,"hehe");
    async function apiCll(){
        if(!search.trim()){
            alert("khaliiiiii")
            return;
        }
        console.log("rcbbbbbbbbbbbb");
        
       let res=  await fetch(`https://dummyjson.com/products/search?q=${search}`)
         let data=    await  res.json()
         console.log(data);
         SetApiData(data.products)
         
        
    }


    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((res)=>{
            return res.json()

        }).then((data)=>{
            console.log(data);
            SetApiData(data.products)
            
        })
    },[])


    function fun1(){
       let sorteddd=   [...ApiData].sort((a,b)=>{
            return a.price-b.price
            
        })

        SetApiData(sorteddd)

    }
    function fun2(){
        let sorteddd=   [...ApiData].sort((a,b)=>{
             return b.price-a.price
             
         })
         SetApiData(sorteddd)
 
     }
    
  return (
    <div>
        <input onChange={(e)=>SetSearch(e.target.value)}/>
        <button onClick={apiCll}>click</button>
        <button onClick={fun1}>low</button>
        <button onClick={fun2}>high</button>

        {
            ApiData.map((a)=>{
                return(<>
                 <h3>{a.price}</h3>
                 <h2>{a.title}</h2>
                <img  src={a.thumbnail}/>
                <button>delet</button>
                </>)
            })
        }
    </div>
  )
}

export default Task


// import React from 'react'

// const Task = () => {
//   return (
//     <div>Task</div>
//   )
// }

// export default Task