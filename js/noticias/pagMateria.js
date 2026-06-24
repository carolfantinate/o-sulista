const params =
    new URLSearchParams(window.location.search);

const articleId =
    Number(params.get("id"));

const article =
    articleData.find(
        item => item.id === articleId
    );

document.getElementById(
    "article-page-title"
).textContent = article.title;

document.getElementById(
    "article-page-subtitle"
).textContent = article.subtitle;

document.getElementById(
    "article-page-author"
).textContent = article.author;

document.getElementById(
    "article-page-hero-image"
).src = article.heroImage;

const contentContainer =
    document.getElementById(
        "article-page-content"
    );

article.blocks.forEach(block => {

    if (block.type === "paragraph") {

        contentContainer.innerHTML += `
            <p class="article-page-paragraph">
                ${block.content}
            </p>
        `;
    }

    if (block.type === "quote") {

        contentContainer.innerHTML += `
            <blockquote class="article-page-quote">
                ${block.content}
            </blockquote>
        `;
    }

    if (block.type === "image") {

        contentContainer.innerHTML += `
            <div class="article-page-inline-image-wrapper">

                <img
                    class="article-page-inline-image"
                    src="${block.src}"
                    alt="">

            </div>
        `;
    }
});