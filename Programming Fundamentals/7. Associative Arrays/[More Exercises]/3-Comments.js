function websiteStorage(input) {

    let users = new Set();
    let allowedArticles = new Set();
    let articles = new Map();

    while (input.length !== 0) {
        let commands = input.shift();

        if (commands.startsWith('user ')) {
            let username = commands.replace('user ', '');
            users.add(username);
        } else if (commands.startsWith('article ')) {
            let article = commands.replace('article ', '');
            allowedArticles.add(article);
        } else {
            let [username, article, title, content] = commands.split(/ posts on |: |, /);

            let comment = {
                username: username,
                title: title,
                content: content,
            }

            if (users.has(username) && allowedArticles.has(article)) {
                if (!articles.has(article)) {
                    articles.set(article, [comment]);
                } else {
                    articles.get(article).push(comment);
                }
            }
        }
    }

    articles = new Map([...articles].sort((a, b) => b[1].length - a[1].length));
    for (let value of articles.values()) {
        value = value.sort((a, b) => a.username.localeCompare(b.username));
    }

    for (let [article, comments] of articles) {
        console.log(`Comments on ${article}`);
        for (let comment of comments) {
            console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
        }
    }
}

// Don't copy the calling of the function in judge, just the code above

websiteStorage(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);