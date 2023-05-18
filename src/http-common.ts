import axios from "axios";

export default axios.create({
    baseURL: "https://librum-server.vercel.app/",
    headers: { 'Content-Type': 'application/json' }
});