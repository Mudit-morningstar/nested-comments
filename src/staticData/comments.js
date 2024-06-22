const commentsData = [
    {
        "id": 1,
        "name": "Alice",
        "text": "This is a top-level comment.",
        "timestamp": "2024-06-21T10:00:00Z",
        "replies": [
            {
                "id": 2,
                "name": "Bob",
                "text": "This is a reply to Alice.",
                "timestamp": "2024-06-21T10:05:00Z",
                "replies": []
            }
        ]
    },
    {
        "id": 3,
        "name": "Charlie",
        "text": "Another top-level comment.",
        "timestamp": "2024-06-21T10:10:00Z",
        "replies": []
    }
];

export default commentsData