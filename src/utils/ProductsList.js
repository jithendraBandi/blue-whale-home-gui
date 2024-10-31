import { categoryNames } from "./utils";
import Logo from "../images/logo.png";

const productsList = [
    {
        id: 1,
        title: "name",
        description: "description",
        category: categoryNames?.CABINETS,
        price: 1000,
        offerPrice: 899,
        highlighed: true,
        image: Logo,
    },
    {
        id: 2,
        title: "name",
        description: "description",
        category: categoryNames?.FILTERS,
        price: 1000,
        offerPrice: null,
        highlighed: false,
        image: Logo,
    },
];

export default productsList;