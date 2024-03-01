import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

import "./App.css"
import 'react-mde/lib/styles/css/react-mde-all.css';


export default function App() {

    const [notes, setNotes] = React.useState(
        JSON.parse(localStorage.getItem("localStorageNotes")) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    React.useEffect(()=>{
        localStorage.setItem("localStorageNotes", JSON.stringify(notes))
    }, notes)
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        // Need to re-arrange note order to put
        // most recently modified note at the top
        setNotes(oldNotes => {
            // Create new empty array
            // Loop over original array
                // If ID matches === currentNoteUd
                    // put the updated note at the
                    // beginning of new array
                // else
                    // push old note at the end of the new array
            // return new array
            const newArray = []
            for (let i = 0; i < oldNotes.length; i++){
                const oldNote = oldNotes[i]
                if (oldNote.id === currentNoteId){
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })

        // This does NOT re-arrange note order
        // setNotes(oldNotes => oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // }))
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
