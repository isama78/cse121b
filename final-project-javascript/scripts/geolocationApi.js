import { fetchIp } from "./fetchApi.js";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '59d55e3e18msh42d9a58df5f7521p118816jsn22bbccb00a2b',
        'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
    }
};

let result = null
document.querySelector('.sections-container').classList.add('hide')
document.querySelector('.loading').classList.add('hide')

document.querySelector('form').addEventListener('submit', async e => {
    e.preventDefault()
    document.querySelector('.loading').classList.remove('hide')
    const value = document.querySelector('input').value
    
    const ipInfo = await fetchIp(value, options)
    result = ipInfo
    console.log(result)
    if (result) {
        document.querySelector('.loading').classList.add('hide')
        document.querySelector('.sections-container').classList.remove('hide')
        document.querySelector('h2').innerHTML = `IP ${result.ip} Info`
        document.querySelector('.city').innerHTML = `City: ${result.city}`
        document.querySelector('.country').innerHTML = `Country: ${result.country}`
        document.querySelector('.continent').innerHTML = `Continent: ${result.continent}`
        document.querySelector('.flag').src = result.flag_image

        if (result.languages.length > 0) {
            result.languages.forEach(language => {
                const langSection = document.querySelector('.lang')
                const langArticule = document.createElement('div')
                let langP = document.createElement('p')
                let nativeLangP = document.createElement('p')
                langP.innerText = `Language Name: ${language.name}`
                nativeLangP.innerText = `Native Name: ${language.native_name}`
                langArticule.append(langP, nativeLangP)
                langSection.append(langArticule)
            });
        }

        document.querySelector('.currency').innerHTML = `Currency: ${result.currency}`
        document.querySelector('.currency-code').innerHTML = `Code: ${result.currency_code}`
        document.querySelector('.currency-native-short').innerHTML = `Native Short: ${result.currency_native_short}`

        document.querySelector('.organization').innerHTML = `Organization: ${result.organization}`
        document.querySelector('.region').innerHTML = `Region: ${result.region}`
        document.querySelector('.domain').innerHTML = `Domain: ${result.domain}`

        document.querySelector('.risk-level').innerHTML = `Risk Level: ${result.risk_level}`
        document.querySelector('.malicious').innerHTML = `Malicious: ${!result.is_malicious ? "No" : "Yes"}`
        document.querySelector('.abusive').innerHTML = `Abusive: ${!result.is_abusive ? "No" : "Yes"}`
        document.querySelector('.message').innerHTML = `Message: ${result.message}`

        document.querySelector('.business').innerHTML = `Is Business: ${!result.is_business ? "No" : "Yes"}`
        document.querySelector('.military').innerHTML = `Is Military: ${!result.is_military ? "No" : "Yes"}`
        document.querySelector('.goverment').innerHTML = `Is Goverment: ${!result.is_goverment ? "No" : "Yes"}`
        document.querySelector('.educational').innerHTML = `Is Educational: ${!result.is_educational ? "No" : "Yes"}`
        document.querySelector('.tor').innerHTML = `Use Tor: ${!result.is_tor ? "No" : "Yes"}`
        document.querySelector('.vpn-proxy').innerHTML = `Use VPN-Proxy: ${!result.is_vpn_proxy ? "No" : "Yes"}`

        document.querySelector('.time-zone').innerHTML = `Time Zone: ${result.time_zone}`
        document.querySelector('.time-zone-offset').innerHTML = `Time Zone Offset: ${result.time_zone_offset}`

        document.querySelector('.lat').innerHTML = `Latitude: ${result.latitude}`
        document.querySelector('.lng').innerHTML = `Longitude: ${result.longitude}`
    }
})




