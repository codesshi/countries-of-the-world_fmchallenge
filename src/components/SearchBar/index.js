import './SearchBar.css'
import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

export const SearchBar = ({search, reset, className = ""}) => {
    const [inputString, setInputString] = useState("")
    const [isLocked, setIsLocked] = useState(false)
    const {theme} = useTheme()
    const classes = className.split(" ")

    const handleChange = (evt) => {
        setInputString(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        setIsLocked(true)
        search(inputString)
    }

    const handleClear = (evt) => {
        setInputString("")
    }

    const handleReset = (evt) => {
        evt.stopPropagation()
        setIsLocked(false)
        setInputString("")
        reset()
    }

    return (
        <div className={["searchbar", ...classes].join(" ")} onClick={handleClear} data-empty={inputString === "" || isLocked} data-theme={theme} >
            {isLocked && (<span className="search-label">{inputString}<button onClick={handleReset}></button></span>)}
            {!isLocked && 
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputString} placeholder="Search for a country..." onChange={handleChange} onClick={(evt) => evt.stopPropagation()}></input>
                </form>
            }
        </div>
    )
}