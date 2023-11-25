import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing(isEditing => !isEditing)
    if(isEditing) {
      onNameChange(symbol, playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" value={playerName} onChange={handleChange} required/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}
