# Оглавление

- [todos](#todos)
- [Технологии](#Технологии)
- [Установка](#Установка)
- [Возможности](#Возможности)

# todos

Простое todo приложение.
Создавалось в рамках выполнения тествого задания.

[Демо]()

## Технологии

TypeScript, React, MUI, Redux.

При первоначальном запуске приложения реализована загрузка начальных данных.
Все задачи и их статус хранятся в localStorage, для взаимодействия с ним была выбрана библиотека Redux

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/natali1503/todos.git
   ```

2. Перейдите в каталог проекта:

   ```bash
   cd
   ```

3. Установите зависимости ии запустите проект командой:

   ```bash
   npm run istart
   ```

## Возможности

1. **Добавление новых задач**

- **Описание**: Пользователь может добавлять новые задачи в список дел. Каждая задача включает:
  - Текст задачи (название).
  - Статус задачи (по умолчанию "открыта").
- **Функционал**:
  - Поле ввода для текста задачи.
  - Кнопка "Добавить" для сохранения задачи, появляется после начала ввода текста задачи.
- **UI/UX**:
  - После добавления новая задача мгновенно появляется в списке.

---

2. **Отмечать выполненные задачи**

- **Описание**: Пользователь может отмечать задачи, как выполненные или возвращать их в статус "открыта".
- **Функционал**:
  - У каждой задачи есть чекбокс для изменения её статуса.
  - Выполненные задачи визуально отличаются (зачёркнутый текст).
- **UI/UX**:
  - При отметке задача меняет стиль (становится зачёркнутой).
  - Возможность снять отметку и вернуть задачу в "открытые".

---

3. **Фильтрация списка по категориям**

- **Описание**: Пользователь может фильтровать задачи для отображения:
  - Все задачи.
  - Только выполненные задачи.
  - Только открытые задачи.
- **Функционал**:
  - Фильтры доступны через кнопки.
  - Список задач обновляется при выборе фильтра.
- **UI/UX**:
  - Чёткие переключатели для фильтров.
  - Быстрое обновление списка при выборе нового фильтра.

---

4. **Подсчёт задач, которые открыты**

- **Описание**: Приложение отображает количество задач, которые ещё не выполнены.
- **Функционал**:
  - Счётчик автоматически обновляется при добавлении, удалении или изменении статуса задачи.
- **UI/UX**:
  - Видимый индикатор.

---

5. **Удаление только выполненных задач**

- **Описание**: Пользователь может удалять задачи только со статусом "выполненные".
- **Функционал**:
  - Кнопка "Clear completed" удаляет все завершённые задачи.
- **UI/UX**:
  - Удобная кнопка для массового удаления выполненных задач.
  - Список задач автоматически обновляется после удаления.

---

#### Взаимодействие компонентов

1. **Добавление задачи**:
   - Обновляет список задач.
   - Увеличивает счётчик открытых задач.
2. **Изменение статуса**:
   - Обновляет отображение в фильтрах.
   - Меняет значение счётчика открытых задач.
3. **Фильтрация**:
   - Показывает только задачи, соответствующие выбранному фильтру.
4. **Удаление выполненных задач**:
   - Очищает список от завершённых задач.
   - Список обновляется после удаления.

---

#### Пример использования

1. Пользователь добавляет задачу: `Купить продукты`.
2. Отмечает задачу как выполненную.
3. Фильтрует задачи, чтобы видеть только открытые.
4. Смотрит на счётчик открытых задач: `3 items left`.
5. Нажимает кнопку `Clear completed`, чтобы очистить завершённые задачи.

---
