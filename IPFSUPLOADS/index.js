const Moralis = require("moralis").default
const fs = require("fs")
require("dotenv").config();


const fileUploads = [
    {
        path: "bean.jpeg",
        content: fs.readFileSync("./bean.jpeg",{encoding:"base64"})
    }
]

async function uploadFiles() {
    await Moralis.start({
        apiKey: process.env.MORALIS_KEY
    })

    const res = await Moralis.EvmApi.ipfs.uploadFolder({
        abi:fileUploads
    })
    console.log(res.result)
}

uploadFiles();