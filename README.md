# hacktivpress


### Deskripsi
Repo ini merupakan sistem blogging sederhana yang dibuat menggunakan _Express JS_ sebagai framework, dan _MongoDB_ untuk database.
App ini dibuat sebagai bagian dari pembelajaran di Hacktiv8.


### Cara penggunaan
* `npm install`
* `npm run dev` (client)
* `nodemon app.js` atau `node app.js` (server)


### API Routes
|   ***Route***  | ***HTTP*** | ***Description***              |
|----------------|:----------:|--------------------------------|
|`/api/signup`   | POST       | Sign up with new user info |
|`/api/signin`   | POST       | Sign in while get an access token based on credentials |
|`/api/articles` | GET        | Get all articles |
|`/api/articles` | POST       | Post new article |
|`/api/articles:id` | GET     | Get / view spesific article |
|`/api/articles:id` | PUT     | Edit article (authenticated user only) |
|`/api/articles:id` | DELETE  | Delete article (authenticated user only) |
|`/api/author?q=:id` | GET  | View by author |
|`/api/category?q=:id` | GET  | View article by category |
