import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";


const format = (userName) => `@${userName}`


export function App() {

    return (
        <section className="App">
            <TwitterFollowCard formatUserName={format} userName="ccamacho_00" name="Carlos" />
            <TwitterFollowCard formatUserName={format} userName="midudev" name="Carlos" />
        </section>
    )

}