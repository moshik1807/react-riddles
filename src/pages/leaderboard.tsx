export default function Leaderboard(){
    const leaderboard = [
  { name: "Moshe", time: 35 },   
  { name: "Sarah", time: 42 },
  { name: "Daniel", time: 48 },
  { name: "Leah", time: 55 },
  { name: "Omer", time: 60 },
  { name: "Noa", time: 65 },
  { name: "Eli", time: 70 },
  { name: "Yael", time: 75 },
  { name: "Avi", time: 80 },
  { name: "Roni", time: 90 }]

    return(
        <>
        <h1>Leaderboard</h1>
        <p>{JSON.stringify(leaderboard, null, 2)}</p>
        </>
    )
}