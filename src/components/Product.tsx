import product1 from "../assets/image-product-1-thumbnail.jpg"
import product2 from "../assets/image-product-2-thumbnail.jpg"
import product3 from "../assets/image-product-3-thumbnail.jpg"
import product4 from "../assets/image-product-4-thumbnail.jpg"
import productLarge1 from "../assets/image-product-1.jpg"
import productLarge2 from "../assets/image-product-2.jpg"
import productLarge3 from "../assets/image-product-3.jpg"
import productLarge4 from "../assets/image-product-4.jpg"
import { useState } from "react"

const Product = () => {
    const [activeItem, setActiveItem] = useState<string>(productLarge1)
    interface ProductImage {
        id: number,
        thumbnail: string,
        coverImg: string
    }

    const productImage: ProductImage[] = [
        {
            id: 1,
            thumbnail: product1,
            coverImg: productLarge1
        },
        {
            id: 2,
            thumbnail: product2,
            coverImg: productLarge2
        },
        {
            id: 3,
            thumbnail: product3,
            coverImg: productLarge3
        },
        {
            id: 4,
            thumbnail: product4,
            coverImg: productLarge4
        }
    ]

    const handleActive = (coverImg : string) => {
        setActiveItem(coverImg)
    }

    const Thumbnails = productImage.map(info => (
        <div className={`w-[22%] focus:outline-none focus:ring focus:border-[hsl(26,100%,55%)] rounded-lg ${
            activeItem === info.coverImg ? 'focus:ring-[2px] focus:border-[2px]' : ''
        }`}
        onClick={() => handleActive(info.coverImg)}
        tabIndex={0} key={info.id}>
            <img src={info.thumbnail} alt="" className="rounded-lg"/>
        </div>
    ))
    
  return (
    <div className="pl-10">
        {activeItem && (<img src={activeItem} alt="" className="mb-4 rounded-2xl" />)}
        <div className="flex justify-between">
        {Thumbnails}
        </div>
    </div>
  )
}

export default Product