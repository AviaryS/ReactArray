import React, {useState} from 'react';

function First(props) {
    const [notes, setNotes] = useState([1, 2, 3, 4]);

    const result = notes.map((note, index) => {
        return <p key={index}>{note}</p>;
    });

    const index = 0;
    return (
        <div>
            <br/> task 1, 2, 3, 4 <br/>
            <p>{result}</p>
            <button onClick={() => setNotes([...notes, 5])}>
                Add
            </button>
            <button onClick={() => setNotes([...notes.slice(0, index), ...notes.slice(index + 1)])}>
                Delete
            </button>
            <button onClick={() => setNotes([...notes.slice(0, index), 'Edited', ...notes.slice(index + 1)])}>
                Edit
            </button>
            <button onClick={() => setNotes([...notes.sort(), ...notes.reverse()])}>
                Reverse
            </button>
        </div>
    );
}

export default First;