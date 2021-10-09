import React, { Component } from 'react';
import uniqueid from "uniqueid";
import ProgressBar from './ProgressBar';

export default class Languages extends Component {

    state = {
        languages : [
            {
                id: uniqueid,
                value: "JavaScript",
                xp: 2,
            },
            {
                id: uniqueid,
                value: "Css3",
                xp: 2,
            },
            {
                id: uniqueid,
                value: "Php",
                xp: 0.6,
            }
        ],
        frameworks: [
            {
                id: uniqueid,
                value: "React",
                xp: 1.8,
            },
            {
                id: uniqueid,
                value: "Bootstrap",
                xp: 0.9,
            },
            {
                id: uniqueid,
                value: "Sass",
                xp: 0.8,
            },
            {
                id: uniqueid,
                value: "Node.js",
                xp: 1,
            },
            {
                id: uniqueid,
                value: "Express.js",
                xp: 0.9,
            },
            {
                id: uniqueid,
                value: "MongoDB",
                xp: 0.9,
            },
            {
                id: uniqueid,
                value: "SQL",
                xp: 0.6,
            },
            {
                id: uniqueid,
                value: "Redux",
                xp: 0.7,
            }
        ]
    }

    render() {

        let { languages, frameworks } = this.state;

        return (
            <div>
                <div className="languagesFrameworks">

                    <ProgressBar 
                        languages={languages}
                        className="languageDisplay"
                        title="languages"
                    />

                    <ProgressBar 
                        languages={frameworks}
                        title="frameworks, Bibliotheques & Bases de donnees"
                        className="frameworkDisplay"
                    />

                </div>
            </div>
        )
    }
}

