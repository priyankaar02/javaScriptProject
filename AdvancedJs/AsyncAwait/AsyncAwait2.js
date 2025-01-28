function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched successfully");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data");

    //Method 1
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();

    //Method 2
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);

    console.log("fetch complete");
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
