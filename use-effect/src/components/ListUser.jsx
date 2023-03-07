import { useContext } from "react";
import { Context } from "../context/Context";

export default function ListUser(props){
    const ctx = useContext(Context)
    const getDatails1 = () =>{
        ctx.getDetails(props.id)
    };
    return (
        <li onClick={getDatails1}>
            <p>{props.name}</p>
        </li>
    )
}