
import React from "react";
import { useLocation } from "react-router-dom";

export const SearchPage:React.FC=()=>
{
    const location=useLocation(); 
    const queryParameters=new URLSearchParams(location.search); 
    const query=queryParameters.get('query') || ''; 

    return (
        <div>
            <h1>You have searched: {query}</h1>
        </div>
    );

}

