import React from "react";
import { useLocation } from "react-router-dom";
export const SearchPage:React.FC=()=>
{
    const location=useLocation(); //uselocation function to locate yourself.
    const queryParameters=new URLSearchParams(location.search);  /// location.search= url search string, calls a new URL search w that paramater
    const query=queryParameters.get('query') || '';  //gets the query that has been searched in Nav.tsx throught the form   
    return (
        <div>
            <h1>You have searched: {query}</h1>
        </div>
    );
}