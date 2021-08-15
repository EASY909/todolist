import React from 'react';
import List from '../type';
interface IProps {
    list: List[];
    Delete: (index: number) => void
}
const Complate: React.FC<IProps> = ({ list, Delete }) => {
    const onDelete = (index: number) => {
        Delete(index);
    }
    return (
        <div>
            <h1>已完成</h1>
            <ul>
                {list.map((item, index) => item.state === 1 ? <li key={index}>{item.name}<span onClick={() => onDelete(index)} className="cur">&nbsp;❎</span></li> : null)}
            </ul>
        </div>
    )
}

export default Complate;