import { useState } from "react";

type PlayerProps = {
  initialName: string;
  symbol: string;
  isActive: boolean;
};

const Player = ({ initialName, symbol, isActive }: PlayerProps) => {
  const [playerName, setPlayerName] = useState<string>(initialName);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditClick = () => {
    // Use the callback form when the next state depends on the previous state. (prev) => !prev is best practice
    setIsEditing((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={`${isActive ? "active" : ""}`}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            placeholder="Player name"
            // Two way binding is when you get a state value and feed it back. Eg handleChange > playerName
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
