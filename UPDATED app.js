function createPost() {
  const content = document.getElementById("postContent").value;

  if (content === "") return;

  const post = document.createElement("div");
  post.className = "card";
  post.innerText = content;

  post.style.animation = "fadeIn 0.5s ease";

  document.getElementById("posts").appendChild(post);

  document.getElementById("postContent").value = "";
}

function uploadPaper() {
  const title = document.getElementById("paperTitle").value;
  const course = document.getElementById("paperCourse").value;
  const url = document.getElementById("paperUrl").value;

  if (!title || !course || !url) return;

  const paper = document.createElement("div");
  paper.className = "card";

  paper.innerHTML = `
    <h3>${title}</h3>
    <p>${course}</p>
    <a href="${url}" target="_blank">Open</a>
  `;

  paper.style.animation = "fadeIn 0.5s ease";

  document.getElementById("papers").appendChild(paper);
}
