import axios from "axios";


// export const makeRequest = axios.create({
// baseURL: process.env.REACT_APP_API_URL,
// headers:{
//     Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
// },

// });

export const makeRequest = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers:{
        Authorization: "bearer " + "5a4ab61b1ce057a1835d0538700e346d30fe646d294a3056e8d646d5675a0eb374205f19e9bd379e7bea9414604f07e33cb2bbcbc7ee3993097df4e14e8161f3b2389cc3a2b730b732f05e1e381ff33ac124dfcc939a19129bdc5d423cd5a61272cb05bd3c0b01634969f09676e62fe120ae0fbdf22f25b64c1c6039bf90503b"
    },
    
    });

