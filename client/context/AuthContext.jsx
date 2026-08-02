import { createContext, useEffect, useState } from "react";
import axios from 'axios'; //Backend API call karne ke liye. 
import toast from "react-hot-toast";
import {io} from "socket.io-client";
const backendUrl = import.meta.env.VITE_BACKEND_URL; // ye .env file url read karta hai.
axios.defaults.baseURL = backendUrl;  // Agar tum API call karte hoo to axios automatically request bhejega.

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [authUser, setAuthUser] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);

    // Check if user is authenticated and if so, set the user data and connect the socket
    const checkAuth = async () =>{
        try {
           const {data} = await axios.get("/api/auth/check");
            if(data.success){
                setAuthUser(data.user);
                connectSocket(data.user)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    // Login function to handle user authentication and socket connection
    const login = async (state, credentials) =>{ // If i call the login state or sign up state it will call login and signup api.
        try {
            const {data} = await axios.post(`/api/auth/${state}` , credentials);
            if( data.success){
                setAuthUser(data.userData);
                connectSocket(data.userData);
                axios.defaults.headers.common["token"] = data.token;
                setToken(data.token);
                localStorage.setItem("token", data.token) // here we will set the token in the local storage 
                // by key value me
                toast.success(data.message) 
            } else{
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
 

    // Logout function to handle user logout and socket disconnection
    const logout = async () =>{
        localStorage.removeItem("token") // when we will remove the token the user will be logout
        setToken(null);
        setAuthUser(null);
        setOnlineUsers([]);
        axios.defaults.headers.common["token"] = null;
        toast.success("Logged Out Successfully");
        socket?.disconnect();
    }

    //Update profile function to handle user profile updates
    
    const updateProfile = async (body) =>{
        try {
            const {data} = await axios.put("/api/auth/update-profile", body)
            if(data.success){
                setAuthUser(data.user);
                toast.success("Profile updated successfully")
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    // Connect socket function to handle socket connection and online users updates
    const connectSocket = (userData)=>{
        if(!userData || socket?.connected) return;
        const newSocket = io(backendUrl, {
            query:{
                userId: userData._id,
            }
        });
        // newSocket.connect();
        setSocket(newSocket);

        newSocket.on("getOnlineUsers", (userIds)=>{
            setOnlineUsers(userIds);
        })
    }

    useEffect(()=>{
        if(token){
            axios.defaults.headers.common["token"] = token;
        }
        checkAuth();
    },[])

    const value = { // it is used so we can access these state and function in any page and component.
        axios,
        authUser,
        onlineUsers,
        socket,
        login,
        logout,
        updateProfile
    }
    return (
        <AuthContext.Provider value = {value}> 
            {children}
        </AuthContext.Provider>
    )
};
