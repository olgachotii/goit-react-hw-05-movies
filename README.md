## Сборка проекта

[шаблон React-проекта](https://github.com/goitacademy/react-homework-template#readme)

### Дополнительные пакеты

### React-toastify

[ссылка на пакет](https://github.com/fkhadra/react-toastify)

[ссылка на лекцию](https://www.youtube.com/watch?v=xoG3l2PgiYY&t=1595s)

`npm install --save react-toastify`

```js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const notify = () => toast('Wow so easy!');
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
```

### Маршрутизатор React Router

`npm install react-router-dom`

### Хостинг Netlify

`npm install netlify-cli -g`

`netlify login`

если терминал бьет ошибку:

1. в корне проэкта создаем файл netlify.toml

```toml
[build]
publish="build"

[[redirects]]
from="/*"
to="/index.html"
status=200
```

2. запускаем проэкт от имени администратора
3. в powershell прописываем `Set-ExecutionPolicy RemoteSigned`,
   [еще варианты](https://stackoverflow.com/questions/41117421/ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system)
4. в package.json если есть homepage - удалить, в scripts прописываем

```js
 "predeploy": "npm run build",
 "deploy": "netlify deploy -p"
```

5.  запускаем деплой `npm run deploy`
