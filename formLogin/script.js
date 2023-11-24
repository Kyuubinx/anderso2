// async function getUsers(){
//     const res = await fetch("http://localhost:3001/users")
//     const resJson = await res.json()
//     console.log(resJson)
// }
// getUsers()
import {toastify} from "./toastify.js"
const myHeaders = {
    "Content-Type": "application/json", 
  };
const user = {
	email: "senacrs@email.com",
	password: "1234"
}
async function login(){
    const bodyJson = JSON.stringify(user)
    const btnLogin = document.querySelector("button")
    btnLogin.innerText= ""
    btnLogin.insertAdjacentHTML("afterbegin",`
    <img class="img-rotate" src="./loader-2-fill.png" alt="">
    `)
  
        setTimeout(async ()=>{
            const res = await fetch(
                "http://localhost:3001/login",
            { 
                
                headers:myHeaders, 
                method:"POST",
                body:bodyJson
            }
                )
                if(res.status == 200){
                    const resJson = await res.json()
                    // toastify("Ok, login efetuado com sucesso!","ok")
                    console.log(resJson)
                }else{
                    // toastify("Email ou senha incorretos","error")
                }
            console.log(res)
            btnLogin.innerHTML = ""
        btnLogin.innerText= "Logar"
        },1500)
        // if(resJson.accessToken){
    
        // }
        // window.location.replace("./cadastro")
    
    
}
login()
const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
})