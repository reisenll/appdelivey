import { ProductProps } from "@/utils/data/products"
import { ProductCartProps } from "../cart-store"

export function add(products: ProductCartProps[], newProduct: ProductProps) {
    const existingProduct = products.find(({ id }) => newProduct.id === id)

    if (existingProduct) {
        return products.map((product) =>
        product.id === existingProduct.id
            ? { ...product, quantify: product.quantify + 1 }
            : product
        )
    }

    return [...products, { ...newProduct,quantify: 1 }]
}

export function remove(products: ProductCartProps[], productRemoveId: string) {
    const updatedProducts = products.map((product) =>
        product.id === productRemoveId
            ? {
                ...product,
                quantify: product.quantify > 1 ? product.quantify -1 : 0,
            }
            : product
    )

    return updatedProducts.filter((product) => product.quantify > 0)
}