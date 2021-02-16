//callback
let postingan = [{
        title: 'First Post',
        desc: 'Ini adalah post pertama'
    },
    {
        title: 'Second Post',
        desc: 'Ini adalah post pertama'
    }
]

const cekPos = () => {
    setTimeout(() => {
        postingan.forEach((postingan) => {
            console.log(`${postingan.title}, ${postingan.desc}`)
        });
    }, 1000);
}
const buatPos = (post, callback) => {
    setTimeout(() => {
        postingan.push(post);
        callback();
    }, 5000);
}

buatPos({
    title: 'Third Post',
    desc: 'AAAAAAAAAAAAAAaa'
}, cekPos)


const fetch = require("node-fetch");

//Promise
const sendDataUsingPromise = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let settings = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "text": `Perfect way to spend your useless time.`
                })
            };
            if (settings != '') {
                resolve(
                    fetchResponse = fetch(url, settings)
                )
            } else {
                reject(console.log('Error!'))
            }
        }, 3000);
    })
}
sendDataUsingPromise('https://sentiment-analisis-api.herokuapp.com/sentiment')
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(e => console.log(e));

//Async/Await
const sendData = async (url) => {
    let settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "text": "The best of its class"
        })
    };
    try {
        fetchResponse = await fetch(url, settings);
        return fetchResponse;
    } catch (e) {
        console.log('Error!')
    }
}

sendData(`https://sentiment-analisis-api.herokuapp.com/sentiment`).then(data => data.json()).then(data => console.log(data)).catch(e => console.log(e))