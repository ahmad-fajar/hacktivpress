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
|`/user`         | POST       | Sign up (create new user) |
|`/signin`       | POST       | Sign in while get an access token based on credentials |
|`/articles`     | GET        | Get all articles |
|`/articles`     | POST       | Post new article |
|`/articles:id`  | GET        | Get / view spesific article |
|`/articles:id`  | PUT        | Edit article (authenticated user only) |
|`/articles:id`  | DELETE     | Delete article (authenticated user only) |
|`/author?q=:id` | GET        | View by author |
|`/category?q=:id` | GET      | View article by category |
