const API = "http://localhost:5000/api";

// Create Post
async function createPost() {
  const content = document.getElementById("postContent").value;

  await fetch(`${API}/posts`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ user: "Student", content })
  });

  loadPosts();
}

// Load Posts
async function loadPosts() {
  const res = await fetch(`${API}/posts`);
  const posts = await res.json();

  document.getElementById("posts").innerHTML = posts.map(p =>
    `<p><b>${p.user}</b>: ${p.content}</p>`
  ).join("");
}

// Upload Paper
async function uploadPaper() {
  const title = document.getElementById("paperTitle").value;
  const course = document.getElementById("paperCourse").value;
  const fileUrl = document.getElementById("paperUrl").value;

  await fetch(`${API}/papers`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ title, course, fileUrl })
  });

  loadPapers();
}

// Load Papers
async function loadPapers() {
  const res = await fetch(`${API}/papers`);
  const papers = await res.json();

  document.getElementById("papers").innerHTML = papers.map(p =>
    `<p>${p.title} - ${p.course} <a href="${p.fileUrl}" target="_blank">View</a></p>`
  ).join("");
}

// Init
loadPosts();
loadPapers();
