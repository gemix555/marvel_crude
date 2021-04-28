const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "./uploads");
  },
  filename: function (req, file, cd) {
    cd(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

module.exports = upload;
