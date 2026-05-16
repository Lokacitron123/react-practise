import { useState } from "react";

type PlayerProps = {
  name: string;
  symbol: string;
};

const Player = ({ name, symbol }: PlayerProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const playerName = name;

  const handleEditClick = () => {
    // When updating state in React you should pass a function and not a value
    // The function is called by React and gets the current state as input value
    // Passing a function because React in the back schedules the state updates, so passing the current state is better to keep track and add it to the updating state schedule cycle
    setIsEditing((prev) => !prev); // Best practise for updating state
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            placeholder="Player name"
            value={playerName}
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
