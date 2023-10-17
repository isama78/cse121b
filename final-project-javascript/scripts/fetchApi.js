export const fetchIp = async (ip, headers) => {
    const url = `https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`;
    try {
        const response = await fetch(url, headers);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}
