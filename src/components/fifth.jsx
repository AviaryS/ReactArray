import React, {useState} from 'react';

function Fifth(props) {
    const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
    const [input, setInput] = useState("");
    const [editItem, setEditItem] = useState(null);

    const startEdit = (index) => {
        setEditItem(index);
        setInput(notes[index]);
    };

    const addItem = (event) => {
        setInput(event.target.value);

        if (editItem != null) {
            setNotes([
                ...notes.slice(0, editItem),
                event.target.value,
                ...notes.slice(editItem + 1),
            ]);
        }
    };

    const blurHandler = () => {
        if (editItem == null) {
            setNotes([...notes, input]);
        } else {
            setEditItem(null);
        }
        setInput("");
    };

    return (
        <div>
            <br/><br/><br/> task 1 <br/>
            <ul>
                {notes.map((item, index) => (
                    <li>
                        {item}{" "}
                        <button onClick={() => startEdit(index)}>Edit</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={input}
                onChange={addItem}
                onBlur={blurHandler}
            />
        </div>
    );
}

export default Fifth;