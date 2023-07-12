const makePost = async (event) => {
  event.preventDefault();
  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('post-content').value.trim();
  console.log(title);
  console.log(content);

  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('failed to create post');
    }
  }
};

document.querySelector('.submitPost').addEventListener('submit', makePost);
