
import axios from 'axios';

export async function ListData (value: string) {
  try {
    const res = await axios.get(`${process.env.BACKEND_URL}/${value}/`);
    return res.data; // Axios automáticamente convierte la respuesta a JSON
 } catch (error) {
    console.error('Error fetching data:', error);
    return error; // Devuelve un array vacío en caso de error
 }
 
}
