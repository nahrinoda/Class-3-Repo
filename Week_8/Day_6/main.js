jQuery.ajax("https://www.reddit.com/.json").done(function(response) {
    // console.log(response);
    var children = response.data.children; // easier to work with
    var posts = [];
    console.log(posts);
    for (var i = 0; i < children.length; i++) {
        var myObject = {
            title: children[i].data.title,
            author: children[i].data.author
        };
        posts.push(myObject);
    }
    
    // optionally, use map to transform the data to
    // return a *NEW* array (doesn't modify the existing array)
    // with the new element
    // DOES THE EXACT SAME THING!!!!!
    var posts2 = children.map(function(eachElement) {
        // return what you want the new element to be
        return {
            title: eachElement.data.title,
            author: eachElement.data.author
        };
    });

    renderPosts(posts);
});

function renderPosts(posts) {
    // [{title: "...", author: "..."}, ...]
    var html = "";
    for (var i = 0; i < posts.length; i++) {
        var postHMTL = `
          <div class="post">
            <h1 class="post-title">${posts[i].title}</h1>
            <span class="post-author">(${posts[i].author})</span>
          </div>
        `;
        console.log(postHMTL);
        html += postHMTL;
    }
    document.body.innerHTML = html;
}
