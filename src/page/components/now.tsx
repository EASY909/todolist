import React from 'react';
import List from '../type';


interface IProps {
    list: List[],
    Complish: (index: number) => void;
    Delete: (index: number) => void;
    Edit: (index: number) => void;
}
const Now: React.FC<IProps> = ({ list, Complish, Delete, Edit }) => {

    const onComplish = (index: number) => {
        Complish(index);
    }
    const onDelete = (index: number) => {
        Delete(index);
    }
    const onEdit = (index: number) => {
        Edit(index);
    }
    return (
        <div>
            <h1>未完成</h1>
            <ul>
                {list.map((item, index) => item.state === 0 ? <li key={index}><span className="cur" onClick={() => {
                    onComplish(index)
                }}>✅&nbsp;</span>{item.name} < span className="cur" onClick={() => onDelete(index)}>&nbsp;❎</span><span className="cur" onClick={() => onEdit(index)}>&nbsp;编辑</span></li> : null)
                }
            </ul >
        </div >
    )
}

export default Now;