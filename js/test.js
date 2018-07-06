class User {
  constructor(name, lastname){
    this.name = name;
    this.lastname = lastname;
  }
  
  get fullname() {
    return `${this.name} ${this.lastname}`;
  }
}

class Feed {
  constructor(feedEl){
    this.feedEl = feedEl;
    this.user = new User('Roy', 'Peled');
    this.postButton = feedEl.querySelector('button');
    this.textArea = feedEl.querySelector('textarea');
    
    
    this.postButton.addEventListener('click', () => this.createPost());
  }
  
  createPost() {
    
    let postBody = this.textArea.value;
    this.textArea.value = '';
    let post = new Post(postBody, this.user);
    this.feedEl.appendChild(post.el);
  }
}

class Post {
  constructor(postBody, author) {
    this.el = document.createElement('article');
    this.el.innerHTML = `
      <author>${author.fullname}</author>
      <p>${postBody}</p>
      <button>remove post</button>
`;
    
    this.removeButton = this.el.querySelector('button');
    
    this.removeButton.addEventListener('click', () => this.remove());
  }
  
  remove() {
    this.el.parentNode.removeChild(this.el);
  }
}

new Feed(document.querySelector('main'));