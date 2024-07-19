import  toast  from "react-hot-toast";
import { useEffect, useState } from "react";

const useGetConversation = ()=>{
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(()=>{
        const getConversation = async ()=>{
            setLoading(true);
            try{
                const res = await fetch('/api/users');
                const data = await res.json();
                if(data.Error){
                    throw new Error(data.Error)
                }
                setConversations(data);

            }catch(error){
                toast.error(error.message)
            }finally{
                setLoading(false);
            }
            
        }
        getConversation();
    },[])

    return {conversations, loading};
}

export default useGetConversation;