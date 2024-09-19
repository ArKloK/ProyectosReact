import { useState } from "react"

export function TwitterFollowCard({ children, userName = "none", initialIsFollowing = false }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const followText = isFollowing ? "Siguiendo" : "Seguir"
    const followButtonClass = isFollowing ?
        "tw-follow-card-button is-following" :
        "tw-follow-card-button"

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img
                    className="tw-follow-card-avatar"
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar de twitter" />
                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-infoName">{children}</strong>
                    <span className="tw-follow-card-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={followButtonClass} onClick={handleClick}>
                    <span className="tw-followCard-text">{followText}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                    </button>
            </aside>
        </article>
    )
}