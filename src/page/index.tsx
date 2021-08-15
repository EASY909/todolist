import React, { useCallback, useState, useEffect } from 'react';
import './index.css';
import Now from './components/now';
import Complate from './components/complate';
import List from './type';
import { getList, addList, complish, deletelist, edit } from './api';
const Index = () => {
    const [list, setList] = useState<List[]>([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getList().then(res => {
            setList(res.data.data)
        })
    }, [])
    const Complish = useCallback((index) => {
        complish({
            list: {
                index,
                state: 1
            }
        }).then((res) => {
            setList(res.data.data)
        })
    }, [])

    const Delete = useCallback((index) => {
        deletelist({
            list: {
                index
            }
        }).then((res) => {
            setList(res.data.data)
        })
    }, []);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            if (!value.trim()) {
                alert("不能输入空！");
                return;
            }
            addList({
                list: {
                    name: value,
                    state: 0
                }
            }).then((res) => {
                setValue("");
                setList(res.data.data)
            })
        }
    }
    const Edit = useCallback((index) => {
        let name = prompt("请修改任务名称");
        if (!name?.trim()) {
            alert("不能输入空！");
            return;
        }

        edit({
            list: {
                index, name
            }
        }).then((res) => {
            setList(res.data.data)
        })
    }, []);
    return (
        <div className='container'>
            输入：<input onChange={(e) => setValue(e.target.value)} value={value} type="text" onKeyDown={onKeyDown} />
            <Now Edit={Edit} Complish={Complish} Delete={Delete} list={list} />
            <Complate Delete={Delete} list={list} />
        </div>
    )
}

export default Index;