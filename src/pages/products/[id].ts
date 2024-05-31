import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../database.json'

export default function fetchIdProduct(req:NextApiRequest, res:NextApiResponse) {
    const { id } = req.query

    const product = products.find(p => p.id === Number(id))
    res.status(200).json(product)
}