function getUserData(onSuccess, onFailure) {
  console.log("Fetching UserData...");
  const userName = prompt("Enter Username");
  setTimeout(() => {
    const userData = {
      userId: "32327e",
      name: "ABC",
    };

    if (userName === userData.name) {
      onSuccess(userData);
    } else {
      onFailure("No user found");
    }
  }, 3000);
}

function getPosts(userId, onSuccess, onFailure) {
  console.log("Fetching Posts for user...", userId);
  setTimeout(() => {
    if (userId) {
      const post = {
        postId: "13232c2",
        caption: "Good Morning",
      };
      onSuccess(post);
    } else {
      onFailure("No Post found");
    }
  }, 3000);
}

function getComments(postId, onSuccess, onFailure) {
  console.log("Fetching Comments for ...", postId);

  setTimeout(() => {
    if (postId) {
      const comments = [
        {
          comment: "Hola",
          commentId: "323231323",
        },
        {
          comment: "Hey",
          commentId: "4734ydh34787",
        },
      ];
      onSuccess(comments);
    } else {
      onFailure("No comments");
    }
  }, 3000);
}

getUserData(
  (userData) => {
    console.log("userData received", userData);
    getPosts(
      userData.userId,
      (postData) => {
        console.log("Post Data Received", postData);
        getComments(
          postData.postId,
          (comments) => {
            console.log("Comments Received", comments);
          },
          (commentError) => {
            console.log(commentError);
          }
        );
      },
      (postError) => {
        console.log(postError);
      }
    );
  },
  (userError) => {
    console.log(userError);
  }
);
