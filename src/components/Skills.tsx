import '../assets/styles/Skills.scss';
import {
  siJavascript,
  siPython,
  siReact,
  siNodedotjs,
  siGraphql,
  siDocker,
  siKubernetes,
  siAmazonwebservices,
  siApacheairflow,
  siApachekafka,
  siApachespark,
  siPostgresql,
  siMongodb,
  siNeo4j,
  siFlask,
  siDjango,
  siJenkins,
  siCircleci,
  siGitlab,
  siPowerbi,
  siAnsible,
  siTerraform,
  siMicrosoftsqlserver,
  siMysql,
  siRedis,
  siElasticsearch,
  siApachehadoop,
  siJupyter,
  siPandas,
  siPostman,
  siSwagger,
  siPrometheus,
  siGrafana,
  siTableau,
  siApachesuperset,
  siMicrosoftexcel,
  siDatabricks,
  siPresto,
  siSnowflake,
  siSupabase,
  siHive,
  siArgo
} from 'simple-icons/icons';

const skills = [
  { name: 'JavaScript', icon: siJavascript },
  { name: 'Python', icon: siPython },
  { name: 'React', icon: siReact },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'GraphQL', icon: siGraphql },
  { name: 'Docker', icon: siDocker },
  { name: 'Kubernetes', icon: siKubernetes },
  { name: 'Amazon AWS', icon: siAmazonwebservices },
  { name: 'Apache Airflow', icon: siApacheairflow },
  { name: 'Apache Kafka', icon: siApachekafka },
  { name: 'Apache Spark', icon: siApachespark },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'Neo4j', icon: siNeo4j },
  { name: 'Flask', icon: siFlask },
  { name: 'Django', icon: siDjango },
  { name: 'Jenkins', icon: siJenkins },
  { name: 'CircleCI', icon: siCircleci },
  { name: 'GitLab', icon: siGitlab },
  { name: 'Power BI', icon: siPowerbi },
  { name: 'Tableau', icon: siTableau },
  { name: 'Ansible', icon: siAnsible },
  { name: 'Terraform', icon: siTerraform },
  { name: 'Microsoft SQL Server', icon: siMicrosoftsqlserver },
  { name: 'MySQL', icon: siMysql },
  { name: 'Redis', icon: siRedis },
  { name: 'Elasticsearch', icon: siElasticsearch },
  { name: 'Hadoop', icon: siApachehadoop },
  { name: 'Jupyter', icon: siJupyter },
  { name: 'Pandas', icon: siPandas },
  { name: 'Postman', icon: siPostman },
  { name: 'Swagger', icon: siSwagger },
  { name: 'Prometheus', icon: siPrometheus },
  { name: 'Grafana', icon: siGrafana },
  { name: 'Excel', icon: siMicrosoftexcel },
  { name: 'Databricks', icon: siDatabricks },
  { name: 'Presto', icon: siPresto },
  { name: 'Snowflake', icon: siSnowflake },
  { name: 'Superset', icon: siApachesuperset },
  { name: 'Supabase', icon: siSupabase },
  { name: 'Hive', icon: siHive },
  { name: 'ArgoCD', icon: siArgo },
  // Add more skills as needed
];

function Skills() {
  return (
    <div className="container" id="skills">
      <div className="tech-skills-container">
        <h2>Skills</h2>
        <div className="tech-skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="tech-skill-item">
              <svg
                className="tech-skill-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d={skill.icon.path} />
              </svg>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
