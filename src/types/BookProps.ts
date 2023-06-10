
export type bookProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any
    _id?: string,
    title: string,
    author: string,
    description: string,
    genre: string,
    stock: number,
    imageUrl: string,
    price: string,
    email: string
  }