import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/AppContainer';
import "./styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// camelCase; ชื่อตัวแปร ฟังก์ชัน
// PascalCase; Class และชื่อไฟล์ Class
// sneck_case; ชื่อ Database
// kebab-case; ใช้ใน CSS