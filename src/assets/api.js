import axios from "axios";
import { LANGUAGE_VERSIONS } from "../languageInfo";

const API =axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

export async function executeCode(language,sourceCode,input){
    const response= await API.post("/execute",{
        language:language,
        version:LANGUAGE_VERSIONS[language],
        files:[
            {
                content: sourceCode,
            },
        ],
        stdin:input,
    });
    console.log(input);
    return response.data;
}