const useComment = () => {
    const insertComment = function(tree, commentId, item) {
        const d = new Date();
        if(tree.id === commentId) {
            tree?.replies?.push({
                id: d.getTime(),
                name: "Test User",
                text: item,
                replies: [],
                timestamp: d.toISOString()
            });
            return tree;
        }

        let latestComment = [];
        latestComment = tree?.replies?.map((object) => {
            return insertComment(object, commentId, item);
        });

        return {...tree, replies: latestComment};
    };

    const editComment = (tree, commentId, value) => {
        const d = new Date();
        if(tree.id === commentId) {
            tree.text = value;
            tree.timestamp = d.toISOString();
            return tree;
        }

        tree.replies.map((object) => {
            return editComment(object, commentId, value);
        });

        return {...tree};
    };

    const deleteComment = (tree, id) => {
        for(let i = 0; i< tree.replies.length; i++) {
            const currentItem = tree.replies[i];
            if(currentItem.id === id) {
                tree.replies.splice(i, 1);
                return tree;
            } else {
                deleteComment(currentItem, id);
            }
        }

        return tree;
    };

    return {insertComment, editComment, deleteComment};
};

export default useComment;