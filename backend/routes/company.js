import express from 'express'
import Company from '../models/Company.js'
const router = express.Router()

router.post('/', async (req,res)=>{
    try {
        console.log(req.body)
        const company = new Company(req.body)
        const savedCompany = await company.save();
        res.status(200).json(savedCompany)
    } catch (error) {
        res.status(500).json(error)
    }


})

router.get('/:companyId', async (req,res)=>{
    const {companyId} = req.params
    try {
        const company = await Company.findOne({companyId: companyId})
        res.status(200).json(company)
    } catch (error) {
        res.status(500).json(error)
    }

})

export default router