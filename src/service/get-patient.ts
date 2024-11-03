import axios from "axios";

export async function getPatient({page}: {page: number}) {
    try {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=5&seed=ab`);

       
        if (response.status !== 200) {
            throw new Error("Erro ao pegar os dados");
        }

        new Promise(resolve => setTimeout(resolve, 5000))

        return response.data;
    } catch (err) {
        console.error(err);
    }
}

export const PatientService = {
    getPatient,
};
