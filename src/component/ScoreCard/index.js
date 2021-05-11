import React from "react"

const Score = () => {
    return (
        <div className="score-box">
            <div>
                <div className="callout primary tiny small: 0.5rem" data-closable >
                    <h2 className= "callout small">SCORE</h2>
                    <h4>Highest Score:24</h4>
                    <h4>Highest Level:4</h4>
                    <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Score
