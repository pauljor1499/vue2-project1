import axios from "axios";
const url = "http://localhost:8000/teacher";

export default class teacher_API {
    async register_teacher(teacher) {
        // axios.defaults.headers.common["Authorization"] =
        //     "Bearer " + JSON.parse(localStorage.getItem("token"));
        const user = await axios.post(url + "/register", teacher);
        return user;
    }
}
