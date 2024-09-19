import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";


const users = [
    {
        userName: "ccamacho_00",
        name: "Carlos",
        isFollowing: false
    },
    {
        userName: "midudev",
        name: "Midudev",
        isFollowing: true
    }
]

//APP definition with map
export function App() {

    return (
        <section className="App">
            {
                users.map((user) => {
                    const { userName, name, isFollowing } = user;
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    );
                })
            }
        </section>
    )

}

//Single APP definition
/*export function App() {

    return (
        <section className="App">
            <TwitterFollowCard userName="ccamacho_00" >
                Carlos
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev" initialIsFollowingisFollowing>
                Midudev
            </TwitterFollowCard>
        </section>
    )

}*/