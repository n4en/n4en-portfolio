import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "Hadoop",
    "Spark",
    "Kafka",
    "Airflow",
    "Amazon Redshift",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Neo4J",
    "SSIS",
    "SSRS",
    "PowerBI",
    "Amazon Redshift",
    "SQL Server",
    "Azure Data Factory",
    "AWS Glue",
    "Azure Synapse Analytics"
];

const labelsSecond = [
    "AWS SageMaker",
    "MLflow",
    "Streamlit",
    "LangChain",
];

const labelsThird = [
    "Git",
    "AWS",
    "Microsoft Azure",
    "Jenkins",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Prometheus",
    "Grafana",
    "Bash",
    "Snyk",
    "SonarQube",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>Deep understanding of the entire data lifecycle, particularly focused on designing, developing, and maintaining robust data pipelines. My passion lies in building efficient and scalable systems that seamlessly transform raw data from diverse sources into a consumable format for data scientists, analysts, and other stakeholders.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>GenAI & MLOps</h3>
                    <p>I have experience in automating and simplifying machine learning (ML) workflows and deployments, streamlining processes to enhance efficiency and scalability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevSecOps & Cloud Engineering </h3>
                    <p>I leverage my expertise to design and implement scalable and resilient cloud solutions. I further empower efficient development lifecycles by driving the adoption of robust DevOps practices, streamlining development and deployment processes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;