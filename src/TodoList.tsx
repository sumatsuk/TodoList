import { useState } from 'react';

let nextId = 0;

export default function List() {
    const [name, setName]: any = useState('');
    const [todoList, settodoList]: any = useState([]);


    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                settodoList([
                    ...todoList,
                    { id: nextId++, name: name }
                ]);

            }}>Add</button>
            <ul>
                {todoList.map((artist: { id: number, name: string }) => (
                    <div>
                        <li key={artist.id}>{artist.name} </li>
                        <button onClick={() => {
                            settodoList(
                                (todoList.filter((a: any) => a.id !== artist.id))
                            );
                        }}>Delete</button>
                    </div>
                ))}

            </ul>
        </>
    );
}

