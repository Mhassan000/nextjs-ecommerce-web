import { client } from '@/lib/sanityClient'
import createImageUrlBuilder from '@sanity/image-url'
import type { Image as IImage } from 'sanity'



const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source: IImage | IImage[] | undefined): string | string[] | undefined => {
  if (!source) return undefined;

  if (Array.isArray(source)) {
    return source.map((image) => imageBuilder.image(image).url() || "");
  } else {
    return imageBuilder.image(source).url() || "";
  }
};