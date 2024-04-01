import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6663c90c56574b7e95f64dd98e566d14"
    }
})