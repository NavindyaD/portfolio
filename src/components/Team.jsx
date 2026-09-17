import { team } from "../data/team";

function Team() {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <div className="section-heading center">
          <span className="section-label">OUR TEAM</span>

          <h2>
            Two developers.
            <span> One vision.</span>
          </h2>

          <p>
            We combine different technical skills and perspectives to create
            practical software solutions.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="team-info">
                <span>{member.role}</span>

                <h3>{member.name}</h3>

                <p>{member.description}</p>

                <div className="team-skills">
                  {member.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;