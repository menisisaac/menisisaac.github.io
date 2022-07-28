import { Card, CardGroup } from "react-bootstrap";
import python from "./python.png"
import mariadb from "./mariadb.jpeg"

const ProjectCard = () => {
    return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={python} />
        <Card.Body>
          <Card.Title>Reddit Data Analysis</Card.Title>
          <Card.Text>
            <ul>
                <li>Analyzed 103,000 Reddit posts focused on machine learning utilizing pandas and NumPy</li>
                <li>Enhanced viewing experience by utilizing Jupyter Notebook to display data in an organized and presentable way</li>
                <li>Improved speed of data analysis by 200% by utilizing additional data structure alongside NumPy</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 7/27/22</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={mariadb} />
        <Card.Body>
          <Card.Title>Database Design</Card.Title>
          <Card.Text>
            <ul>
                <li>Designed and implemented a relational database for managing a classroom</li>
                <li>Utilized use case diagrams, case definitions, and class diagrams as part of design cycle</li>
                <li>Defined SQL commands to provide ease of access of common commands</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 7/27/22</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={python} />
        <Card.Body>
          <Card.Title>Anonymous Hackers Chat Log Analysis</Card.Title>
          <Card.Text>
            <ul>
                <li>Processed 480,000 line internet relay chat log from online hacking community using Python</li>
                <li>Identified and processed patterns in strings by utilizing regular expressions on 229,604 chat lines</li>
                <li>Found and corrected over 50 edge cases by implementing unit testing</li>
                <li>Managed project progress over 4 weeks with github actions and Trello project management</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 7/27/22</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
}
 
export default ProjectCard    
