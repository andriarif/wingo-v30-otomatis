export default async function handler(req, res) {
    // URL API yang Anda berikan
    const TARGET_URL = 'https://spin88.sbs/api/webapi/GetNoaverageEmerdList';

    try {
        const response = await fetch(TARGET_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/plain, */*'
            },
            // Parameter yang dibutuhkan API tersebut
            body: 'typeid=1&pageno=0&pageto=10&language=vi'
        });

        const data = await response.json();
        
        // Berikan akses CORS agar frontend bisa membaca
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data' });
    }
}
