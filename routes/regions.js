const { createRegion, getRegion, getAllRegions, updateRegion, deleteRegion } = require('../controllers/regionsController');

const regionsRouter = require('express').Router();

regionsRouter.get('/', async (req,res) => {
    let region = await getAllRegions();
    res.status(200).send(region);
});

regionsRouter.post('/', async (req,res) => {
    let region = await createRegion(req.body);
    return res.status(201).send(region);
});

regionsRouter.get('/:id', async (req,res) => {
    let region = await getRegion(req.params.id);
    return res.status(200).send(region);
});

regionsRouter.put('/:id', async (req,res) => {
    let region = await updateRegion(req.params.id, req.body);
    return res.status(200).send(region);
});

regionsRouter.delete('/:id', async (req,res) => {
    let region = await deleteRegion(req.params.id);
    return res.status(200).send(region);
});

module.exports = regionsRouter;