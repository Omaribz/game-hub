import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b5f0301e31df432da97803c5e6a7349c'
    }
});