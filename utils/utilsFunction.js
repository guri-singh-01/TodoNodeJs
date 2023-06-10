const encrypt = (data) => {
    const encrpytedData = Buffer.from(`${data}`).toString('base64')
    return encrpytedData
}
const decrypt = (data) => {
    const decrpytedData = Buffer.from(`${data}`, 'base64').toString('ascii')
    return decrpytedData
}
module.exports={encrypt,decrypt}