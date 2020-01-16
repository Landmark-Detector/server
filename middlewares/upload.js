const gcsUpload = require('gcs-upload')

const upload = gcsUpload({
    limits:{
        fileSize: 1e6
    },
    gcsConfig:{
        keyFileName: '/home/riko/Documents/hack-tiv8-project-4bdb4ee78a06.json',
        bucketName: 'landmark-picture'
    }
})


module.exports = upload