import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-description">
          <p>Привет! Меня зовут Алексей Петров, я веб-разработчик из Иннополиса (РТ). С 2008 года занимаюсь созданием
            веб-приложений, прошел путь от работы с популярными CMS/CMF (WordPress, Joomla, Drupal, MODx, OpenCart,
            etc.) до современных PHP-фреймворков (Yii2, Laravel, CodeIgniter, etc.). Последние 5 лет работаю в
            enterprise-сегменте, разрабатываю решения на Битрикс24 для нефтегазовой отрасли.</p>
          <p>Технологии, которыми владею:</p>
          <ul>
            <li>Backend: PHP (включая фреймворки Yii2, Laravel, CodeIgniter), Bitrix24</li>
            <li>Frontend: JavaScript, CSS, HTML, React JS (начальный уровень)</li>
            <li>Базы данных: SQL, Postgres, Redis, Memcached, MongoDB</li>
            <li>Администрирование: настройка LAMP/LEMP, базовое администрирование серверов</li>
            <li>Дополнительно: базовые навыки Python (планирую углублять)</li>
          </ul>
          <p>Цели:</p>
          <ul>
            <li>Структурировать и расширить опыт работы с React JS;</li>
            <li>Запустить стартап – разработать mini-app для Telegram (React + бекенд).</li>
          </ul>
          <p>Хочу более углубленно изучить React JS, GraphQL и современные фронтенд-технологии!</p>
          <p>Готов к новым вызовам и сложным проектам! 🚀</p>
        </div>
      </header>
    </div>
  );
}

export default App;
