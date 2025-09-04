import { useEffect, useState } from "react";

export default function Read() {
  const [riddles, setRiddles] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:2123/riddle/getAll")
      .then((res) => res.json())
      .then((data) => setRiddles(data))
      .catch((err) => console.error("Error fetching riddles:", err));
  }, []);

    return(
        <>
        <h1>Leaderboard</h1>
        <p>{JSON.stringify(riddles, null, 2)}</p>
        </>
    )
}