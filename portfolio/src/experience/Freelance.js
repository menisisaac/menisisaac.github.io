import Gallery from "./Gallery";

const Freelance = () => {
    return (
        <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">Freelance work for Schenectady Cross Country Team</h5>
            <p class="card-text">The website is used to create more exposure for their team, giving parents, athletes, and the community more access to what is going on</p>
            <ul>
                <li>Developed containerized microservices exposed with a reverse proxy using Docker, Spring Boot, and MySQL</li>
                <li>Combined information from 5 different sources to summarize information for athletes  and parents</li>
                <li>Automated web scraping and formatting of race results based on team schedule</li>
                <li>Developed a frontend using react to present the infromation in a simple easy to read format</li>
            </ul>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <Gallery/>
        </div>
    );
}
 
export default Freelance;