//* Texts/elements
var para = document.querySelector(".para")
var input = document.querySelector('input')
var btn = document.querySelector('button')
var temp = document.querySelector(".temp")
var info 
var humidity_para = document.querySelector('.day')
var feels_like_para = document.querySelector(".feels-like")
var pressure_para = document.querySelector('.pressure')
var localtime_para = document.querySelector(".local-time")


// images
var image = document.querySelector(".sun")
var snow_image = document.querySelector(".cold")
var pressure_image = document.querySelector(".pressure-image")
var humidity_image = document.querySelector(".humidity-image")
var partly_cloud_image = document.querySelector(".partly-cloud")
var ligthly_rain = document.querySelector(".ligth-rain")
var patchy_rain_night_image = document.querySelector(".patchy-rain-night")
var patchy_rain_day_image = document.querySelector(".patchy-rain-day")


var api_key = "58534d98e53d43a98ff114615240905"
btn.addEventListener("click",()=>{
    info = input.value
    async function fetch_and_data(){
        try{
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${info}&days=10`)
            const data = await response.json()
            
            let city = `${data.current.temp_c}°C`
            let temperature =  `Погода в ${data.location.region}`
            temp.textContent = city

            if (data.current.condition.text == "Sunny"){
                image.style.display = "inline-block"
                snow_image.style.display = "none"
                partly_cloud_image.style.display = "none"
                ligthly_rain.style.display = "none"
                patchy_rain_night_image.style.display = "none"
                patchy_rain_day_image.style.display = "none"
            }else if(data.current.condition.text == "Cloudy"){
                snow_image.style.display = "inline-block"
                image.style.display = "none"
                partly_cloud_image.style.display = "none"
                ligthly_rain.style.display = "none"
                patchy_rain_night_image.style.display = "none"
                patchy_rain_day_image.style.display = "none"
            }else if(data.current.condition.text == "Partly Cloudy"){
                image.style.display = "none"
                snow_image.style.display = "none"
                partly_cloud_image.style.display = "inline-block"
                patchy_rain_night_image.style.display = "none"
                patchy_rain_day_image.style.display = "none"
                ligthly_rain.style.display = "none"
            }else if(data.current.condition.text == "Light drizzle"){
                image.style.display = "none"
                snow_image.style.display = "none"
                partly_cloud_image.style.display = "none"
                ligthly_rain.style.display = "inline-block"
                patchy_rain_night_image.style.display = "none"
                patchy_rain_day_image.style.display = "none"
            }else if(data.current.condition.text == "Patchy rain nearby" && data.current.is_day == 0){
                image.style.display = "none"
                snow_image.style.display = "none"
                partly_cloud_image.style.display = "none"
                ligthly_rain.style.display = "none"
                patchy_rain_night_image.style.display = "inline-block"
                patchy_rain_day_image.style.display = "none"
            }else if(data.current.condition.text == "Patchy rain nearby" && data.current.is_day == 1){
                image.style.display = "none"
                snow_image.style.display = "none"
                partly_cloud_image.style.display = "none"
                ligthly_rain.style.display = "none"
                patchy_rain_night_image.style.display = "none"
                patchy_rain_day_image.style.display = "inline-block"
            }

            para.textContent = temperature
            console.log(data)
            
            let average_humidity = `Влажность: ${data.current.humidity}`
            humidity_para.textContent = average_humidity
            humidity_image.style.display = "inline-block"
            
            let feel_like = `Ощущается как: ${data.current.feelslike_c}`
            feels_like_para.textContent = feel_like
            
            let pressure = `Давление: ${data.current.pressure_mb} мм`
            pressure_para.textContent = pressure
            pressure_image.style.display = "inline-block"


            let local_time = `Local time: ${data.location.localtime}`
            localtime_para.textContent = local_time


            
        }catch(error){
            console.log("Error", error)
        }
    }
    fetch_and_data()
    
})


