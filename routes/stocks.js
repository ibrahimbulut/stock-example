const router = require('express').Router();
let Stock = require('../models/stock.model');

router.route('/').get((req,res) => {
    Stock.find({},
        {_id:0, product_id:1, name:1, stock:1, created_date:1}).sort({product_id: 1})
        .then(stocks => {
            res.status(200).json({code:0, msg:"success", data:stocks})
        })
        .catch(err => res.status(400).json('Error' + err));
});


router.route('/add').post((req,res) => {
    const product_id=Number(req.body.product_id);
    const name=req.body.name;
    const stock=Number(req.body.stock);
    const created_date=Date.parse(req.body.created_date);
    
    const newStock = new Stock({
        product_id,
        name,
        stock,
        created_date
    });

    newStock.save()
        .then(() => res.json('Stock added'))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/:product_id').get((req, res) => {
    Stock.findById(req.params.product_id)
        .then(stock => res.json(stock))
        .catch(err => res.status(400).json('Error' +err));
});

module.exports = router;
