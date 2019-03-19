const express = require('express')
const router = express.Router()
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
  })
var upload = multer({ storage: storage })

const auth = require('./controllers/auth')
const user = require('./controllers/user')

// router.update('/user', user.updateUser)
// router.delete('/user', user.deleteUser)
router.get('/api/user', user.setUser)
router.get('/api/fb-user', user.setFbUser)

// router.post('/file-upload', upload.single('file'), user.uploadPhoto)


router.post('/api/signup', upload.single('file'), auth.signUp)
router.post('/api/signin', auth.signIn)
router.get('/api/set-params', user.setParams)
router.post('/auth/facebook', auth.facebook)



module.exports = { rout: router }





