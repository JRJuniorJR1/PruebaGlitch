import { Router } from 'express';

const router = Router();



const user = {
    username: 'federicoosandon',
    nombre: 'fede',
    apellido: 'osandon',
    role: 'user'
};
 
router.get('/', (req, res) => {
    res.render('index', {})
})

export default router;
