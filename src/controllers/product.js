import products from "../models/product"
import Joi from "joi"

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required()
})
export const create = async (req, res) => {
    try {

        const { error } = productSchema.validate(req.body)
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const product = await products.create(req.body)
        return res.status(201).json({
            message: "them san pham thanh cong",
            product
        })

    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
//get all
export const getAll = async (req, res) => {
    try {
        const product = await products.find()
        return res.status(201).json({
            product
        })

    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
//get one
export const get = async (req, res) => {
    try {
        const product = await products.findOne(req.params.id)
        return res.status(201).json({
            product
        })

    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
//delete
export const remove = async (req, res) => {
    try {

        const product = await products.findByIdAndDelete(req.params.id)
        return res.status(201).json({
            message: "xoa san pham thanh cong",
            product
        })

    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

//update
export const update = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body)
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const product = await products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(201).json({
            message: "cap nhat san pham thanh cong",
            product
        })

    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}