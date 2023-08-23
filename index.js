const populate  = async (value,currency)=>{
let mystr = ""
url = ("https://api.currencyapi.com/v3/latest?apikey=cur_live_kp2Uycmt6vxDSWUwmyWs2dKqCPzALRC8tUJbGOwG&base_currency="+currency)

let response  = await fetch(url)
let rJson = await response.json()
document.querySelector(".output").style.display="block"

console.log(rJson)
for(let key of Object.keys(rJson["data"])){
    key, rJson["data"][key]["code"],rJson["data"][key]["value"]
    mystr +=`
    <tr>
    <td>${key}</td>
    <td>${rJson["data"][key]["code"]}</td>
    <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
    </tr>
    `
}

const tablebody= document.querySelector("tbody");
tablebody.innerHTML = mystr
    
}
const btn  = document.querySelector(".btn")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log("Button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = (document.querySelector("select[name='currency']").value)
    // console.log(value)
    // console.log(currency)

    populate(value,currency)
})
