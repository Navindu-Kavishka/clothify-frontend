export const color = [
    "white",
    "black",
    "red",
    "green",
    "blue",
    "orange",
    "yellow",
    "Pink",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "black", label: "Black" },
            { value: "red", label: "Red" },
            { value: "green", label: "Green" },
            { value: "blue", label: "Blue" },
            { value: "orange", label: "Orange" },
            { value: "yellow", label: "Yellow" },
            { value: "pink", label: "Pink" },
        ],
    },

    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ],
    },

];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "100-499", label: "LKR 100 - LKR 499" },
            { value: "500-999", label: "LKR 500 - LKR 999" },
            { value: "1000-1999", label: "LKR 1000 - LKR 1999" },
            { value: "2000-2999", label: "LKR 2000 - LKR 2999" },
            { value: "3000-3999", label: "LKR 3000 - LKR 3999" },
            { value: "4000-4999", label: "LKR 4000 - LKR 4999" },
        ],
    },

    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ],
    },

    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" },
        ]
    }

];
    
export const sortOptions = [
    { name: "Price: Low to High", query:"price_l_price_h", current: false },
    { name: "Price: High to Low", query:"price_h_price_l", current: false },
];
            