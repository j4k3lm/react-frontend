// export async function getProducts() {
//     const response = await fetch(
//         "http://localhost:8000/api/products",
//         {
//             headers: {
//                 Accept: "application/json"
//             }
//         }
//     );

//     if (!response.ok) {
//         throw new Error(`HTTP ${response.status}`);
//     }

//     const body = await response.json();

//     return body.data;
// }

import axios from "axios";

export async function getProducts() {
    const response = await axios.get(
        "http://localhost:8000/api/products",
        {
            headers: {
                Accept: "application/json"
            }
        }
    );

    return response.data.data;
}

export async function sendDemoProduct() {
    const response = await fetch(
        "http://localhost:8000/api/products",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Marker",
                price: 35
            })
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
}