import { categoryNames } from "./utils";

const productsList = [
    {
        id: 1,
        title: "name",
        description: "description",
        category: categoryNames?.CABINETS,
        price: 1000,
        offerPrice: 899,
        highlighed: true,
        image: "",
    },
    {
        id: 2,
        title: "name",
        description: "description",
        category: categoryNames?.FILTERS,
        price: 1000,
        offerPrice: null,
        highlighed: false,
        image: "",
    },
];

export default productsList;