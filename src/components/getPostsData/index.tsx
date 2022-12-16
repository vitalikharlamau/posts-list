export const getPostsData = (num: number) => {
    return fetch(`https://studapi.teachmeskills.by/blog/posts/${num}/`)
        .then((response) => response.json())
        .then((data) => data);
};
