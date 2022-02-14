

const { createClient } = require("webdav");

const client = createClient(
    "http://127.0.0.1",
    {
        username: "admin",
        password: "greetsps"
    }
);

// Get directory contents
const directoryItems = await client.getDirectoryContents("/sites");
// Outputs a structure like:
// [{
//     filename: "/my-file.txt",
//     basename: "my-file.txt",
//     lastmod: "Mon, 10 Oct 2018 23:24:11 GMT",
//     size: 371,
//     type: "file"
// }]

export default client;