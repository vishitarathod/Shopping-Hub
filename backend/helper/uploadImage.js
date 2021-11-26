import multer from "multer";

const upload = multer({
    // dest:'avatars',      //remove this then imges not store locally in avatar directory
    dest:'E:/Shopping_Hub/Shopping_Hub_Frontend/shopping-Hub/src/assets',
    limits:{
        fieldSize: 1000000  // 1MB = 1 000 000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('File must be image !!'))
        }
        cb(undefined, true)
    }
})
export default upload