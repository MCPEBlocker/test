const { createSubregion, deleteSubregion, updateSubregion, getSubregion, getAllSubregions } = require('../controllers/subregionsController');

const subregionsRouter = require('express').Router();

subregionsRouter.get('/', async (req,res) => {
    let region = await getAllSubregions();
    res.status(200).send(region);
});

subregionsRouter.post('/', async (req,res) => {
    let subregion = await createSubregion(req.body);
    return res.status(201).send(subregion);
});

subregionsRouter.get('/:id', async (req,res) => {
    let subregion = await getSubregion(req.params.id);
    return res.status(200).send(subregion);
});

subregionsRouter.put('/:id', async (req,res) => {
    let subregion = await updateSubregion(req.params.id, req.body);
    return res.status(200).send(subregion);
});

subregionsRouter.delete('/:id', async (req,res) => {
    let subregion = await deleteSubregion(req.params.id);
    return res.status(200).send(subregion);
});

module.exports = subregionsRouter;