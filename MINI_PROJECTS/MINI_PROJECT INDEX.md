# MINILAB PROJECTS

Индекс направлений (Project Tracks) для Mini Project в рамках [[TAIL MINILAB|TAIL MINILAB]]. Участник выбирает одно направление на неделе 5 и реализует свой первый полноценный проект в его рамках. Подробнее — в [[Неделя 5 - Explore|Неделя 5 — Explore]].

---

## Web Development

Сайты, веб-сервисы, интерфейсы, небольшие full-stack продукты.

Проекты:

- [[Campus Events - Веб интерфейс мероприятия колледжа|Campus Events - Мероприятия колледжа Веб]] - Веб-сервис, собирающий мероприятия колледжа в одном месте с карточками событий и адаптивным интерфейсом; может выступать UI-контуром для College Events Intelligence
- [[Lost & Found - Потерянные вещи|Lost & Found - Потерянные вещи]] - Веб-сервис для публикации и поиска потерянных и найденных вещей в колледже с описанием, фотографией и статусом объявления
- [[LinkHub - Персональная страница|LinkHub - персональная страница ссылок]] - Персональная публичная страница, объединяющая ссылки на проекты, соцсети и портфолио человека; начальный законченный веб-продукт
- [[Equipment Booking - Бронирование оборудования|Equipment Booking - Бронирование оборудования]] - Внутренний сервис управления оборудованием TAIL: каталог ресурсов, контроль доступности и бронирование с защитой от конфликтующих броней
- [[MiniLab Project Finder - Поисковик проектов|MiniLab Project Finder - Поисковик проектов]] - Веб-сервис, помогающий участнику MINILAB подобрать подходящий MiniProject через опрос и recommendation logic

## Data & Analytics

Работа с данными, визуализация, дашборды, поиск закономерностей, DataLens/BI, построение data pipeline.

Проекты:

- [[Campus News Intelligence - Новости колледжа|Campus News Intelligence - Новости колледжа]] - Система, собирающая публикации из нескольких источников и формирующая единую AI-структурированную новостную ленту колледжа с аналитикой
- [[College Events Intelligence - Мероприятия и аналитика|College Events Intelligence - Мероприятия и аналитика]] - Data Pipeline, превращающий неструктурированную информацию о мероприятиях в Events Dataset с AI Extraction, календарём и аналитикой
- [[TAIL Grants Radar - Финансовый радар|TAIL Grants Radar - Финансовый радар]] - Система мониторинга внешнего финансирования: сбор грантовых конкурсов и программ поддержки с AI-анализом их соответствия проектам TAIL
- [[TAIL Opportunity Radar - Радар возможностей|TAIL Opportunity Radar]] - Радар технологических и образовательных возможностей (хакатоны, чемпионаты, стажировки), собранных и структурированных с помощью AI

## AI & Agents

LLM-приложения, небольшие AI-инструменты, агенты, AI Evaluation и автоматизация.

Проекты:

- 🔥[[Second Brain — Персональная система знаний|HOT PROJECT — Second Brain]] - Система знаний по принципам из [[AI_BOOK - Overview|руководства]]
- [[College Meeting Agent - Агент Референд|College Meeting Agent - Агент Референд]] - AI-агент, превращающий транскрипт встречи в структурированный протокол и сохраняющий контекст между встречами (Structured Extraction, Agent Memory)
- [[College Methodologist Agent - Агент Методист|College Methodologist Agent - Агент Методист]] - AI-агент, помогающий методисту работать с базой документов колледжа (RAG, grounding, citations)
- [[College Event Manager Agent - Агент управления мероприятиями|College Event Manager Agent]] - AI-агент управления мероприятиями колледжа через Tool Calling и READ/WRITE операции
- [[Student Navigator Agent - Агент сопровождения студента|Student Navigator Agent]] - AI-агент, сопровождающий студента через конкретный процесс колледжа от начала до результата (State Machine, RAG, Tool Calling, Human-in-the-Loop)
- [[AI QA Agent for POLY|AI QA Agent for POLY]] - Автоматизированный тестировщик POLY: генерирует тестовые запросы, запускает их, оценивает ответы через LLM-as-a-Judge и формирует QA-отчёт (AI Evaluation, Test Generation, Regression Testing)

## Game Development

Небольшие игры, игровая логика, интерактивные механики и прототипы.

Проекты:

- 👾 [[Career Quest - 2D Квест по специальности|Career Quest]] - Короткая 2D top-down пиксельная RPG, позволяющая абитуриенту прожить сюжетную версию обучения по выбранной специальности колледжа (Game State, Quest System, Dialogue System, Level Design, Pixel Art, Storytelling)
- [[Virtual College - 3D бродилка по колледжу|Virtual College - 3D бродилка по колледжу]] - Интерактивная виртуальная 3D-модель части реального колледжа, по которой пользователь свободно перемещается и исследует основные помещения; реальное здание выступает источником требований (3D, Level Design, Navigation, Interaction, POLY Integration)

## Arduino & Robotics

Датчики, контроллеры, автоматизация физических устройств, простая робототехника.

Проекты:

- [[Voice Lab Controller - Голосовой контроллер лаборатории|Voice Lab Controller - Голосовой контроллер]] - Голосовое управление физическими устройствами лаборатории: естественный язык → безопасные команды реальному железу через LLM Tool Calling; соединяет Software с Physical World (Speech-to-Text, Tool Calling, IoT, Physical Computing)
- [[Physical POLY - Физическая оболочка POLY|Physical POLY]] - Физическое воплощение AI-ассистента POLY: настольный AI-робот/интерактивный терминал, являющийся полноценным клиентом существующей системы POLY (Voice → STT → POLY → TTS → Speaker; State Machine, Human–Robot Interaction, Client–Server Architecture)
- [[Talking Plant - Говорящее растение|Talking Plant - Говорящее растение]] - Физическое растение с датчиками, определяющее состояние среды и сообщающее о нём через AI в заданном характере; демонстрирует разделение Data ≠ State ≠ Presentation (Sensors, State Machines, Physical Computing, LLM API, TTS)
- [[TAIL Status Cube - Куб состояния|TAIL Status Cube - Куб состояния]] - Физический куб, подключённый к цифровым системам лаборатории и визуально отображающий их состояние (Digital State → API → ESP32 → State Machine → Physical Representation; State Machine, API Integration, IoT, Physical Computing)
- [[Smart Demo Stand - Интерактивный демонстрационный стенд|Smart Demo Stand - Интерактивный демонстрационный стенд]] - Интерактивный демонстрационный стенд, который сам замечает посетителя и управляет сценарием показа через State Machine; может становиться оркестратором других устройств TAIL (Sensors, State Machines, Physical Computing, Interaction Design, IoT)
- [[AI Drawing Robot - Робот рисовальщик|AI Drawing Robot]] - Робот-плоттер XY, получающий цифровое описание или AI-промпт и физически воспроизводящий рисунок на бумаге; демонстрирует иерархию Идея → Представление → Координаты → Мотор, где AI генерирует план, а детерминированная система исполняет его (Motion Control, Path Planning, Computer Graphics, AI Integration, Structured Output, Hardware–Software Architecture)
- [[Campus Environment Node - Мониторинг среды колледжа|Campus Environment Node - Мониторинг среды колледжа]] - Компактное IoT-устройство мониторинга параметров окружающей среды (температура, влажность, CO₂, освещённость), передающее реальную телеметрию во внешнюю систему; участник строит полный путь данных «физический мир → датчик → сеть → backend → база → аналитика» (ESP32, Sensors, IoT, Telemetry, API Integration, Backend)

## Assistive Technology

Технологии для помощи человеку: прототипы протезов, адаптивные устройства, механика + электроника + ПО.

Проекты:

- 🔥[[TAIL HAND - Прототип роботизированной кисти|HOT PROJECT — TAIL HAND]] - 3D-печатный прототип роботизированной кисти, управляемой собственным мышечным сигналом EMG пользователя: мышца → EMG → обработка → команда → сервоприводы → механическая кисть; включает персональную калибровку, обработку биосигнала, варианты хвата, feedback loop и haptic-обратную связь (EMG, Signal Processing, Robotics, Servo Control, 3D Printing, Haptic Feedback, Control Systems)
- [[Smart Cane Prototype - Умная трость]] - Экспериментальный прототип дополнительного сенсорного модуля для трости, который обнаруживает препятствия и сообщает о них через тактильную обратную связь; главная задача — спроектировать понятный физический язык передачи информации (Space → Distance → Data → Vibration → Perception; Sensors, Haptic Interfaces, Haptic UX, State Machines, User Testing, Physical Computing)
- [[BioCoach - Стресс Коуч|Presentation BioCoach]] - Wearable-система записи и анализа физиологических показателей пользователя во время публичных выступлений; каждая презентация — отдельная сессия с baseline, биосигналами, самооценкой и AI-резюме; разделяет измерение, вычисленный показатель и интерпретацию (Biosensors, Time-Series Analytics, Data Engineering, Session Modeling, Data Visualization, AI Integration)

Смежные проекты Assistive Tech / HCI, которые находятся в других направлениях:

- [[One-Hand Interface - Однорукий интерфейс|One-Hand Interface]] - Физический контроллер, позволяющий одной рукой выполнять набор основных действий на компьютере; главная задача — спроектировать понятный язык управления большим количеством действий при ограниченном количестве физических элементов (Arduino & Robotics) - Assistive Tech / Протезирование
- [[POLY Button - Кнопка вызова AI ассистента|POLY Button]] Физическая кнопка быстрого голосового обращения к POLY или другому AI-агенту; одно физическое действие как интерфейс к цифровым агентам (Arduino & Robotics) - Assistive Tech / Accessibility

## Human–Machine Interfaces

Взаимодействие человека с устройствами через физические сигналы; в первую очередь доступные проекты с ЭМГ, пульсом и другими сенсорами, а не сложные EEG-системы.

Проекты:

- 🔥[[NeuroControl Lab|HOT PROJECT — NeuroControl Lab]] - Экспериментальная платформа HMI, превращающая несколько сигналов тела (EMG, IMU, PPG) в язык команд для внешней системы; включает калибровку, командный слой, распознавание образов и тестовую среду для количественного сравнения интерфейсов (Bio Signals, Signal Processing, Multimodal Interfaces, Calibration, ML Classification, HCI)
- 🔥[[EEG Interface - Brain-Computer Interface|HOT PROJECT — EEG Interface]] - Экспериментальная BCI-система, получающая EEG-сигнал, визуализирующая его и исследующая преобразование выбранных характеристик сигнала в компьютерную команду; включает acquisition, обработку сигнала, frequency analysis, классификацию и real-time BCI (BCI, Bio Signals, Signal Processing, FFT, Feature Extraction, ML Classification, Time-Series)

---

## Связанные документы

- [[TAIL MINILAB|TAIL MINILAB]]
- [[Неделя 5 - Explore|Неделя 5 — Explore]]
- [[Неделя 6 - Mini Project|Неделя 6 — Mini Project]]
- [[Неделя 7 - Mini Project|Неделя 7 — Mini Project]]
---