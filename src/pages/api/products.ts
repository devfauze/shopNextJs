//[]Criação de API para os produtos do database.json

import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../database.json'

function fetchProducts(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({products})
}