### Deploy locally instructions :rocket:

* via [Docker(docker-compose)](https://docs.docker.com/compose/gettingstarted/) :sunglasses:
    1) Move to the project directory (`cd $Project_root_path`).
    2) Run `docker-compose up [-d]` to deploy application (use `-d` flag to detach process from terminal).
    3) Open in your [browser](http://localhost/)
* via [Node](https://nodejs.org/en/) ([yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)) :dizzy_face:
    1) Move to the project directory (`cd $Project_root_path`).
    2) Run `yarn` or `npm install` to install all modules.
    3) For **development** stage you may use `yarn start` or `npm run start`.
    4) For **production** stage you need another several steps.
    5) Run `yarn build` or `npm run build` to build project.
    6) See [some methods](https://create-react-app.dev/docs/deployment/) for serving build react app.