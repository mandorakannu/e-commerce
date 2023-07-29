interface IProducts {
    map(arg0: (product: IProducts) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
}[]

export default IProducts;