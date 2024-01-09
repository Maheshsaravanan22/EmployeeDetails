import axios from "axios";



  const url = "http://localhost:3001/employees"

export const addEmployee = async (data) => {
    try{
       return await axios.post(url,data);
    }catch(error){
        console.log("Error while using addEmployee api",error.message);
    }
}

export const getEmployees = async (data) => {
    try{
       return await axios.get(url,data);
    }catch(error){
        console.log("Error while using getEmployees api",error.message);
    }
}

export const getEmployee = async (data) => {
    try{
    return await axios.get(`${url}/${data}`)
    }
    catch(error){
        console.log("Error while using getEmployee api",error.message);
    }
}

export const editEmployee = async (data,id) => {
    try{
    return await axios.put(`${url}/${id}`,data)
    }
    catch(error){
        console.log("Error while using editEmployee api",error.message);
    }
}

export const deleteEmployee = async (id) => {
    try{
    return await axios.delete(`${url}/${id}`);
    }
    catch(error){
        console.log("Error while using deleteEmployee api",error.message)
    }
}