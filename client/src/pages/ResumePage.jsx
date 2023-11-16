// added some minimal inline styleing to list elements
// might remove later for css file if i want more styling

export default function ResumePage() {
    return (

        <div className='container'>
            <h1>Resume</h1>
            {/* downloadable resume stored in public folder */}
                    <a href="/resume/resume-public.pdf" download>
                        Download
                    </a>
                    <div className='row'>
                    <div className='col-4'>
                <h4>Front-end Technologies</h4>
            <ul style={{'listStyle': 'none', 'textAlign': 'left'}}>
                <li>HTML 5
                </li>
                <li>CSS
                </li>
                <li>JavaScript
                </li>
                <li>JQuery
                </li>
                <li>responsive design
                </li>
                <li>React
                </li>
                <li>Bootstrap
                </li>
            </ul>
            </div>
            
            <div className='col-4'>
            <h4>Back-end Technologies</h4>
            <ul style={{'listStyle': 'none', 'textAlign': 'left'}}> 
                <li>APIs (RESTFUL)
                </li>
                <li>Node
                </li>
                <li>Express
                </li>
                <li>MySQL, Sequalize
                </li>
                <li>MongoDB, Mongoose
                </li>
                <li>GraphQL
                </li>
                <li>Nodemailer
                </li>
            </ul>
            </div>
            </div>
        </div >   
    ) 

}