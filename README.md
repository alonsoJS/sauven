# Sauven

## To run this project:

Execute the following command in the root of the project

```
docker compose up
```

This will create 3 containers: `web` - `api` - `db`

## To view the project

Go to http://localhost:3000.

On the page click the "Upload File" button. The page should make a request to the api, upload and decompress the file, then show it in the page for the internal files/folders to be browsed.

It persists previous uploads event if you turn off the containers in docker. It will not persist them if you delete the containers and delete the docker images.

If you click in any file it will show a preview of that file, the supported files for preview are: `.txt`, `jpg | jpeg | png | webp | gif` and `pdf`. Any other extension will not show a preview.

If you want to download a file, click on it, it will show the preview and in the top-right corner click the button "Download" to store the file in your system.
