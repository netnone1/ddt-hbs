const express = require('express');
const axios = require('axios')
const path = require('path')

const router = express.Router()

router.get('/', async (req, res) => {
    const activePath = "/"
    try {
        const response = await axios.get('https://api.erdi.cmu.ac.th/cmu/eng?fbclid=IwAR2Fm6ka5iSkwnK4bIQgnZPjsUViHE1dQORhzJETAlgVftF6f3rG0iyPOY8')
        const energy = response.data
        const data = {};
        response.data.data.forEach(item => {
            if (!data[item.site_id]) {
                data[item.site_id] = { location: item.location, kW: item.kW };
            }
        });
        res.render(path.join(__dirname, '../views/home.hbs'), { energy: data, path: activePath })
    } catch (error) {
        console.error(error)
        res.render(path.join(__dirname, '../views/home.hbs'))
    }
})

// Building
router.get('/building/:buildingId', (req, res) => {
    console.log(req.params)
    res.render(path.join(__dirname, '../views/building.hbs'))
})

// Floor
router.get('/building/:buildingId/:floorId', (req, res) => {
    console.log(req.params)
    res.render(path.join(__dirname, '../views/floor.hbs'))
})

// Room
router.get('/building/:buildingId/:floorId/:roomId', (req, res) => {
    console.log(req.params)
    res.render(path.join(__dirname, '../views/room.hbs'))
})

// About
router.get('/about', (req, res) => {
    console.log(req.params)
    res.render(path.join(__dirname, '../views/about.hbs'))
})


module.exports = router