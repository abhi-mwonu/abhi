<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Abhishek V - Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Portfolio webpage of Abhishek V" />
    <meta name="keywords" content="portfolio, website, personal website, GitHub, projects, computer science, engineering, IT" />
    <meta name="author" content="Abhishek V" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="icon" type="image/png" href="./logo.png" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Raleway&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="css/animate.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
    <script src="js/modernizr-2.6.2.min.js"></script>
    <script type="module" src="index.js"></script>
    <script src="js/profile-card.js"></script>
  </head>
  <body>
    <div id="colorlib-page">
      <div class="container-wrap">
        <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <aside id="colorlib-aside" role="complementary" class="border js-fullheight no-print">
          <div class="text-center">
            <div class="author-img">
              <img alt="profile-img" src="./logo.png" />
            </div>
            <h1 id="colorlib-logo"><a href="./index.html">Abhishek V</a></h1>
          </div>
          <nav id="colorlib-main-menu" role="navigation" class="navbar" style="padding-top: 2em">
            <div id="navbar" class="collapse">
              <ul>
                <li><a href="#" data-nav-section="about">About</a></li>
                <li><a href="#" data-nav-section="skills">Skills</a></li>
                <li><a href="#" data-nav-section="education">Education</a></li>
                <li><a href="#" data-nav-section="profile-card">GitHub Profile</a></li>
                <li><a href="#" data-nav-section="repos">Top Repositories</a></li>
                <li><a href="#" data-nav-section="contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </aside>
        <div id="colorlib-main">
          <!-- About Section -->
          <section class="colorlib-about" data-section="about">
            <div class="colorlib-narrow-content">
              <div class="row animate-box" data-animate-effect="fadeInLeft">
                <div class="about-desc">
                  <h1>About</h1>
                  <p>
                    Hi, I'm <strong>Abhishek V</strong>, a B.Tech student in <strong>Information Technology</strong>.  
                    Passionate about software development, cybersecurity, and exploring new technologies.  
                    I love building projects, solving problems, and continuously learning.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Skills Section -->
          <section class="colorlib-skills" data-section="skills">
            <div class="colorlib-narrow-content">
              <div class="row animate-box" data-animate-effect="fadeInLeft">
                <div class="about-desc">
                  <h1>Skills</h1>
                </div>
                <div class="skills-container">
                  <ul>
                    <li>JavaScript, C Programming</li>
                    <li>Python</li>
                    <li>Database Management Systems (DBMS)</li>
                    <li>Web Development</li>
                    <li>Cybersecurity</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Education Section -->
          <section class="colorlib-education" data-section="education">
            <div class="colorlib-narrow-content">
              <div class="row animate-box" data-animate-effect="fadeInLeft">
                <div class="about-desc">
                  <h1>Education</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                  <div class="education-card">
                    <h2>Government Engineering College, Idukki</h2>
                    <p><strong>B.Tech in Information Technology</strong> (2023 - 2027)</p>
                    <p>
                      Currently pursuing a Bachelor of Technology in Information Technology.  
                      Gaining knowledge in <strong>Web Development, Cybersecurity, Database Management,</strong>  
                      and <strong>Networking</strong> while actively participating in tech communities.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div class="education-card">
                    <h2>KPRP HSS, Kongad</h2>
                    <p><strong>Higher Secondary Education - Biology Science</strong> (2020 - 2022)</p>
                    <p>
                      Completed higher secondary education with a focus on <strong>Biology Science</strong>,  
                      developing a strong foundation in <strong>Physics, Chemistry, Biology, and Mathematics</strong>.  
                      This period fueled my interest in technology and problem-solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- GitHub Profile Card Section -->
          <section class="colorlib-profile" data-section="profile-card">
            <div class="colorlib-narrow-content">
              <div class="row animate-box" data-animate-effect="fadeInLeft">
                <h1>GitHub Profile</h1>
                <div class="github-profile-card">
                  <div class="github-card" id="github-profile"></div>
                </div>
              </div>
            </div>
          </section>

          <!-- Top Repositories Section -->
          <section class="colorlib-experience no-print" data-section="repos">
            <div class="colorlib-narrow-content">
              <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div class="about-desc">
                  <a href="https://github.com/abhi-mwonu" target="_blank" style="color: inherit">
                    <h1>
                      Top <span style="color: #f9bf3f">Repositories</span>
                      <i class="fa fa-external-link" aria-hidden="true" style="font-size: 30px"></i>
                    </h1>
                  </a>
                </div>
              </div>
              <div class="row animate-box" data-animate-effect="fadeInUp">
                <div id="repos" class="repo-container"></div>
              </div>
            </div>
          </section>

          <!-- Contact Section -->
          <section class="colorlib-contact" data-section="contact">
            <div class="colorlib-narrow-content">
              <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div class="about-desc">
                  <h1>Contact</h1>
                </div>
                <p>
                  Feel free to email me at 
                  <strong><a href="mailto:itsmeabhishek555@gmail.com">itsmeabhishek555@gmail.com</a></strong> 
                  for tech discussions, collaborations, or any inquiries.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/main.js"></script>
    <script>
      // Fetch GitHub Profile Data
      document.addEventListener("DOMContentLoaded", function () {
        // Fetch GitHub Profile
        fetch("https://api.github.com/users/abhi-mwonu")
          .then(response => response.json())
          .then(data => {
            const profileContainer = document.getElementById("github-profile");
            if (!profileContainer) return;

            profileContainer.innerHTML = `
              <div class="profile-card">
                <img src="${data.avatar_url}" alt="${data.login}" class="profile-avatar" />
                <h2>${data.name || data.login}</h2>
                <p>${data.bio || "No bio available."}</p>
                <div class="profile-stats">
                  <p><strong>Followers:</strong> ${data.followers}</p>
                  <p><strong>Following:</strong> ${data.following}</p>
                  <p><strong>Repositories:</strong> ${data.public_repos}</p>
                </div>
                <a href="${data.html_url}" target="_blank" class="github-button">View Profile</a>
              </div>
            `;
          })
          .catch(error => console.error("Error fetching GitHub profile:", error));

        // Fetch Top Repositories
        fetch("https://api.github.com/users/abhi-mwonu/repos?sort=updated&per_page=5")
          .then(response => response.json())
          .then(data => {
            const reposContainer = document.getElementById("repos");
            if (!reposContainer) return;

            data.forEach(repo => {
              const repoItem = document.createElement("div");
              repoItem.classList.add("repo-box");
              repoItem.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <a href="${repo.html_url}" target="_blank" class="repo-link">View Repository</a>
              `;
              reposContainer.appendChild(repoItem);
            });
          })
          .catch(error => console.error("Error fetching repositories:", error));
      });
    </script>
  </body>
</html>
