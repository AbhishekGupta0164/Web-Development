
   let formData= document.querySelector("#formData")
//    console.log(formData,"heheh");
   formData.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(formData[0].value);
    // console.log(formData[1].value);
    // console.log(formData[2].value);
    let data={
        name:formData[0].value,
        email:formData[1].value,
        pass:formData[2].value,
    }
    localStorage.setItem("userData",JSON.stringify(data))
    // console.log("hello");
    
   })


 let LoginData=  document.querySelector("#LoginData")
 LoginData.addEventListener("submit",(e)=>{
    e.preventDefault()

    let login={
        email:LoginData[0].value,
        pass:LoginData[1].value,
    }
let localStorageData= localStorage.getItem("userData")
   console.log(localStorageData);
let mainData=    JSON.parse(localStorageData)
 console.log(mainData);

 if(login.email===mainData.email && login.pass===mainData.pass){
    alert("User found")
 }else{
    alert("User not found")
 }
 })
   
 