const removeFromArray = function(arr, ...theArgs) {
    return arr.filter((number) => !theArgs.includes(number));
};



// Do not edit below this line
module.exports = removeFromArray;


// Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    //  const commentId = comments.find((comment) => comment.id == 823423);
    //  console.log(commentId);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    //  const commentIndex = comments.findIndex((comment) => comment.id == 823423);
    //  comments.splice(commentIndex, 1);
    // console.log(comments);