import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../Config/Settings';

export async function getData(url:string) {
    const response = await axios.get(API_BASE_URL+url);
    return response.data   
}

export async function postData(url:string,data:any){
    axios.post(API_BASE_URL+url,data)
}