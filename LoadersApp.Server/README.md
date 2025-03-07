# Loaders Web API

A web API that performs CRUD operations using two different data loaders. 
Both loaders are referenced as dll in the project.

## Configuration
Edit file appsettings.json:
* Set "LoaderUsed": "FileLoader" to use the FileLoader loader.
```
"LoaderUsed": "FileLoader"
```
* Set "LoaderUsed": "DataLoader" to use the SqlServerLoader loader.
```
"LoaderUsed": "DataLoader"
```
### Swagger environment
Navigate to /swagger to get detailed documentation about the endpoints and their functionality.