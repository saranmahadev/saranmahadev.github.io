fetch("./data/all.json").then(
  (data) => data.json()
).then(
  (projects) => {
    var all = projects.projects;

    var projects = document.getElementById("main");

    all.forEach(project => {      

      var section = document.createElement("section");
      section.className = "project";

      var div = document.createElement("div");
      div.className = "text";

      var ul = document.createElement("ul");
      ul.id = "skill-blocks"

      project.stacks.forEach(stack => {
        var li = document.createElement("li");
        li.innerHTML = stack;
        ul.appendChild(li);
      });

      var title = document.createElement("h2");
      title.innerHTML = project.title;
      
      var subtitle = document.createElement("h3");
      subtitle.innerHTML = project.subtitle;

      var descp = document.createElement("p");
      descp.innerHTML = project.description;

      div.appendChild(ul);
      div.appendChild(title);
      div.appendChild(subtitle);
      div.appendChild(descp);

      section.appendChild(div);

      console.log(section);
      projects.appendChild(section);
    });
  }
)