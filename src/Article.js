import './Article.css'
import profileImg from './Images/profile_picture.jpg'

export default function Article() {
    return (
    <div>
      <div className="message">Hello, I'm dev from Poland</div>

      <div className="article-container">
        <div className="text-section">
            <div className="name">Hi, I'm Patryk</div>
            <div className="title">Programmer</div>
          
        </div>

        {/* Image on the right */}
        <img className="profile-picture" src={profileImg} alt="Profile" />
      
      </div>
      <div className='about'>
          <h2 className='header-about'>About Me</h2>
          <p>I am a passionate programmer with a love for creating innovative solutions. 
              With a strong foundation in various programming languages and frameworks, I enjoy tackling complex problems and turning ideas into reality. 
              My journey in the tech world has been driven by curiosity and a desire to continuously learn and grow. 
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with like-minded individuals. 
              Let's connect and build something amazing together!</p>
        </div>
      
      <div className='bio'>
          <h2 className='header-bio'>Bio</h2>
          <ul>
              <li>2004 - Born in Poland</li>
              <li>01.03.2023 31.03.2023 - Programmer at Argo-Hytos located in Zator (Internship)</li>
              <li>26.04.2024 - I graduated from a technical school with a programming profile
                (Powiatowe centrum kształcenia technicznego i branżowego w Oświęcimiu)
              </li>
            </ul>
      </div>

      <div className='interests'>
          <h2 className='header-interests'>Interests</h2>
          <p>Coding, Workout, Playing on the piano, Anime, Games</p>
      </div>
    </div>
    )
}    