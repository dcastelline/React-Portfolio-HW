import React from 'react';
import DayPlanner from './assets/DayPlanner.png';
import NoteTaker from './assets/NoteTaker.png';
import PasswordGenerator from './assets/PasswordGenerator.png';
import README from './assets/README.png';
import RescueSpot from './assets/RescueSpot.png';
import TeamProfileGenerator from './assets/TeamProfileGenerator.png';
// import Project from './project';

export default function PortfolioCard() {
    return (
        <div>
            <div>
                <h3>These are a few of my favorite things.</h3>
            </div>
            <div className="portfolio-items">
                <div className="day-planner">
                    <img alt="day planner" src={DayPlanner} width="200" height="200" class="thumbnail" />
                    <p>A day planner created using HTML, CSS, and JavaScript.</p>
                    <a href="https://dcastelline.github.io/Day-Planner/">Day Planner</a>
                    <br />
                    <a href="https://github.com/dcastelline/Day-Planner">GitHub</a>
                </div>
                <br />
                <div className="note-taker">
                    <img alt="note taker" src={NoteTaker} width="200" height="200" class="thumbnail" />
                    <p>This is a Node and Express program that allows a user to take and save notes.</p>
                    <a href="https://dc-notetaker.herokuapp.com/">Note Taker</a>
                    <br />
                    <a href="https://github.com/dcastelline/Note-Taker">GitHub</a>
                </div>
                <br />
                <div className="password-generator">
                    <img alt="password generator" src={PasswordGenerator} width="200" height="200" class="thumbnail" />
                    <p>A random password generator created using HTML, CSS, and JavaScript.</p>
                    <a href="https://dcastelline.github.io/Homework-3-JSPasswordGenerator/">Password Generator</a>
                    <br />
                    <a href="https://github.com/dcastelline/Homework-3-JSPasswordGenerator">GitHub</a>
                </div>
                <br />
                <div className="readme">
                    <img alt="readme" src={README} width="200" height="200" class="thumbnail" />
                    <p>A README generator that allows a user to answer questions using Express to generate a good looking README.</p>
                    <a href="https://github.com/dcastelline/README-Generator">README Generator</a>
                </div>
                <br />
                <div className="rescue-spot">
                    <img alt="rescue spot" src={RescueSpot} width="200" height="200" class="thumbnail" />
                    <p>A day planner created using HTML, CSS, and JavaScript.</p>
                    <a href="dcastelline.github.io/project-1-rescue-spot/">Rescue "Spot"</a>
                    <br />
                    <a href="https://github.com/dcastelline/Project-1-Rescue-Spot">GitHub</a>
                </div>
                <br />
                <div className="team-profile">
                    <img alt="team profile generator" src={TeamProfileGenerator} width="200" height="200" class="thumbnail" />
                    <p>This project uses Express to allow a user to create team member profiles.</p>
                    <a href="https://github.com/dcastelline/Team-Profile-Generator">GitHub</a>
                </div>
            </div>
        </div>
    )
}
