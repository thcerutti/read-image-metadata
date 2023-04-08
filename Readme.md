# Read image metadata

The objective of this repository is to read images metadata and write it to a file in JSON format.

Sample command, from the root folder:

`node . --prop:parameters --path:'/home/THIAGO.CERUTTI/repos/personal/temp/sample-images' --output:'/home/THIAGO.CERUTTI/Downloads/output.txt'`

on Windows, use double quotes for the path:
`node . --prop:parameters --path:"C:\Users\thiag\repos\read-image-metadata\sample images" --output:"C:\temp\log.txt"`

## Params

- `--prop`: The property to be read from the file metadata
- `--path`: The image's path
- `--output`: The file where the information will be stored
