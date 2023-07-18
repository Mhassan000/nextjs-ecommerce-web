import { Image as IImage, Slug } from "sanity";

export interface IFProduct {
    name: string
    ptype: string
    image: IImage
    price: number
    _id: string
    slug: Slug
  }