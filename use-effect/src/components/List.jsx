
import { getRandId } from "../App";
import ListUser from "./ListUser";

export default function List(props){
    return (
        <ul>
            {props.list.map(info =><ListUser name={info.name} id={info.id} key={getRandId()}/>)}
        </ul>
    )
}