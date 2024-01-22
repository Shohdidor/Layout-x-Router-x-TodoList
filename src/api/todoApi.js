import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let api = "http://localhost:3000/data"

export const getUser = createAsyncThunk("todos/getUser",
    async function () {
        try {
                let { data } = await axios.get(api)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const deleteUser = createAsyncThunk ( "todos/deleteUser" , async function ( id , {dispatch}) {
    try {
        let { data } = await axios . delete ( `${api}/${id}`)
    } catch (error) {
        console.log(error);
    }
    dispatch ( getUser ())
})

export const addUser = createAsyncThunk ( "todos/addUser" , async function ( user , { dispatch }) {
    try {
        let { data } = await axios.post ( api,user)
    } catch (error) {
        console.log(error);
    }
    dispatch (  getUser())
})

export const editUser = createAsyncThunk ( "todos/editUser" , async function ( user , { dispatch } ) {
    try {
        let { data } = await axios . put ( `${api}/${user.id}` , user)
    } catch (error) {
        console.log(error);
    }
    dispatch(getUser)
})