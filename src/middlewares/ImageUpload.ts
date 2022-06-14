import { Request } from 'express';
import multer from 'multer';

const imageUploadMiddleware = multer({
  fileFilter: (req: Request, file, cb) => {
    const extensionImage = ['image/png', 'image/jpg', 'image/jpeg'].find(
      format => format == file.mimetype,
    );

    if (extensionImage) return cb(null, true);
    return cb(null, false);
  },
  storage: multer.diskStorage({
    destination: (req: Request, file, cb) => {
      cb(null, './public/uploads/user');
    },
    filename: (req: Request, file, cb) => {
      cb(null, Date.now().toString() + '_' + file.originalname);
    },
  }),
});

export default imageUploadMiddleware;
