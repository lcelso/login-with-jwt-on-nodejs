import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        /*
          crypto gera uma string de 16 digitos,
          abaixo eu retornoo nome convertendo para uma string em hexamadecimal
          concatenado com a extencao do arquivo original.

          ex: minha-imagem.jpg => 78791879.jpg
        */
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
