# nested-comments

    This is a nested comments application which manages and renders hierarchical comments using React components and custom hooks.

# Instruction to Start: 

    npm i > npm start

# Libraries Used: 

    It uses only one new package which is: "dayjs" to show the time stamp more elegantly, apart from that it only uses react libraries.

# Functionalities

    1. Create: Allows user to create a new top level comment or reply to an existing comment.
    2. Read: Allows user to read all the existing comment.
    3. Edit: Allows user to edit a previously added comments. (Bonus Feature).
    4. Delete: Delete any of the existing comment. If a parent comment is deleted all its children are also automatically deleted.
    5. Shows the name of the user and timestamp when the comment has been made.

# Future Scope

    1. Add authorisation to the app, where only the user who added the comment can edit or delete it.
    2. Add edit options to text like bold, italics etc.
    3. Allow the functionality to comment gifs, pictures and other formats.