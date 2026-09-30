const directions = [
  { id: 'all', label: 'Все проекты', short: 'Все', icon: '✦' },
  { id: 'web', label: 'Web Development', short: 'Web', icon: '⌘' },
  { id: 'data', label: 'Data & Analytics', short: 'Data', icon: '⌁' },
  { id: 'ai', label: 'AI & Agents', short: 'AI', icon: '◎' },
  { id: 'game', label: 'Game Development', short: 'GameDev', icon: '◇' },
  { id: 'robotics', label: 'Arduino & Robotics', short: 'Robotics', icon: '⌬' },
  { id: 'assistive', label: 'Assistive Technology', short: 'Assistive', icon: '✣' },
  { id: 'hci', label: 'Human–Machine Interfaces', short: 'HMI', icon: '∿' }
];

const projects = [
  {title:'Campus Events', track:'web', level:'Начальный / средний', time:'1–2 недели', desc:'Единая афиша мероприятий колледжа с карточками событий, фильтрами и адаптивным интерфейсом.', task:'Собрать разрозненную информацию о событиях в одном понятном веб-интерфейсе, где студент быстро найдёт актуальное мероприятие.', result:'Работающий адаптивный каталог событий с подробными страницами, фильтрацией и понятным состоянием каждого мероприятия.', tags:['Frontend','UI/UX','Adaptive']},
  {title:'Lost & Found', track:'web', level:'Начальный / средний', time:'2 недели', desc:'Сервис для публикации и поиска потерянных и найденных вещей в колледже.', task:'Создать удобный и безопасный способ сообщить о находке или пропаже и связать владельца вещи с тем, кто её нашёл.', result:'Веб-сервис с объявлениями, фотографиями, поиском, фильтрами и жизненным циклом от публикации до возврата вещи.', tags:['Full-stack','Database','Product']},
  {title:'LinkHub', track:'web', level:'Начальный', time:'1 неделя', desc:'Персональная публичная страница, объединяющая проекты, соцсети и портфолио.', task:'Спроектировать компактную цифровую визитку, которая рассказывает о человеке и ведёт к его главным работам и контактам.', result:'Опубликованная персональная страница с индивидуальным визуальным стилем, адаптивной вёрсткой и рабочими ссылками.', tags:['HTML/CSS','Design','GitHub Pages']},
  {title:'Equipment Booking', track:'web', level:'Средний', time:'2 недели', desc:'Внутренний сервис каталога, доступности и бронирования оборудования TAIL.', task:'Убрать конфликты при использовании общего оборудования и сделать его состояние прозрачным для участников лаборатории.', result:'Каталог ресурсов с календарём доступности, созданием брони и защитой от пересекающихся заявок.', tags:['Backend','Calendar','Database']},
  {title:'MiniLab Project Finder', track:'web', level:'Начальный / средний', time:'2 недели', desc:'Подбор подходящего MiniProject по интересам, опыту и доступным ресурсам.', task:'Спроектировать модель рекомендаций, которая сопоставляет профиль участника с проектами и объясняет свой выбор.', result:'Каталог с опросом, системой оценки соответствия и несколькими персональными рекомендациями.', tags:['Algorithms','UX','Recommendation']},

  {title:'Campus News Intelligence', track:'data', level:'Средний', time:'2 недели', desc:'AI-структурированная новостная лента колледжа из нескольких источников.', task:'Превратить публикации разного формата в единый поток чистых, сопоставимых и пригодных для анализа данных.', result:'Автоматизированный pipeline сбора, нормализации и представления новостей с базовой аналитикой.', tags:['Data Pipeline','NLP','Dashboard']},
  {title:'College Events Intelligence', track:'data', level:'Средний', time:'2 недели', desc:'Data Pipeline, превращающий неструктурированные анонсы в набор данных о событиях.', task:'Извлекать из текстов даты, места, темы и другие атрибуты, сохраняя проверяемую связь с источником.', result:'Events Dataset, календарь и аналитический дашборд, обновляемые из реальных анонсов.', tags:['ETL','AI Extraction','BI']},
  {title:'TAIL Grants Radar', track:'data', level:'Средний', time:'2 недели', desc:'Система мониторинга грантов, конкурсов и программ внешнего финансирования.', task:'Регулярно находить возможности финансирования и оценивать их соответствие проектам лаборатории.', result:'Обновляемый реестр грантов с дедлайнами, критериями, скорингом релевантности и уведомлениями.', tags:['Monitoring','Scoring','AI Analysis']},
  {title:'TAIL Opportunity Radar', track:'data', level:'Средний', time:'2 недели', desc:'Радар хакатонов, чемпионатов, стажировок и образовательных возможностей.', task:'Собрать разрозненные возможности в одну структурированную систему и помочь не пропускать подходящие дедлайны.', result:'Поисковая база возможностей с категориями, сроками, источниками и оценкой релевантности.', tags:['Parsing','Analytics','Automation']},

  {title:'Second Brain', track:'ai', level:'Продвинутый / HOT', time:'3–4 недели', desc:'Персональная система знаний, которая помогает сохранять, связывать и находить идеи.', task:'Построить не просто хранилище заметок, а рабочий контур захвата, осмысления и повторного использования знаний.', result:'Система с ingest-процессом, семантическим поиском, связями между заметками и ответами со ссылками на источники.', tags:['RAG','Knowledge Base','Embeddings'], hot:true},
  {title:'College Meeting Agent', track:'ai', level:'Средний', time:'2 недели', desc:'AI-агент, превращающий транскрипт встречи в структурированный протокол.', task:'Извлекать решения, задачи, ответственных и сроки, сохраняя контекст между последовательными встречами.', result:'Агент с устойчивой схемой протокола, памятью и проверяемой привязкой выводов к транскрипту.', tags:['LLM','Extraction','Agent Memory']},
  {title:'College Methodologist Agent', track:'ai', level:'Средний', time:'2–3 недели', desc:'AI-помощник методиста для работы с базой документов колледжа.', task:'Давать точные ответы по локальной нормативной базе, не придумывая фактов и показывая источник каждого утверждения.', result:'RAG-агент с поиском по документам, цитированием, оценкой качества и корректным отказом при нехватке данных.', tags:['RAG','Grounding','Citations']},
  {title:'College Event Manager Agent', track:'ai', level:'Средний', time:'2 недели', desc:'Агент управления мероприятиями через инструменты и READ/WRITE операции.', task:'Научить AI безопасно читать состояние события и выполнять разрешённые изменения через строго описанные инструменты.', result:'Агент с tool calling, подтверждением опасных действий, журналом операций и понятным разделением ответственности.', tags:['Tool Calling','Workflow','Safety']},
  {title:'Student Navigator Agent', track:'ai', level:'Средний', time:'2 недели', desc:'Агент, сопровождающий студента по конкретному процессу от начала до результата.', task:'Определять текущую ситуацию человека, хранить состояние и предлагать именно следующий релевантный шаг.', result:'Процессный агент со state machine, RAG, памятью прогресса и поддержкой Human-in-the-Loop.', tags:['State Machine','RAG','Agents']},
  {title:'AI QA Agent for POLY', track:'ai', level:'Средний / продвинутый', time:'2–3 недели', desc:'Автоматизированный тестировщик AI-ассистента POLY с регрессионными отчётами.', task:'Системно проверять качество ответов AI на наборах сценариев и замечать ухудшения после изменений.', result:'Pipeline генерации тестов, запуска, оценки через LLM-as-a-Judge и формирования воспроизводимого QA-отчёта.', tags:['AI Evaluation','Testing','LLM Judge']},

  {title:'Career Quest', track:'game', level:'Продвинутый', time:'2–3 недели', desc:'Короткая 2D top-down RPG о пути обучения выбранной специальности.', task:'Перевести образовательную траекторию в интерактивную историю с выборами, заданиями и понятной игровой петлёй.', result:'Завершённый вертикальный срез игры с перемещением, диалогами, квестами и небольшим сюжетом.', tags:['2D Game','Narrative','Level Design']},
  {title:'Virtual College', track:'game', level:'Продвинутый', time:'2–3 недели', desc:'Интерактивная 3D-модель части колледжа для свободного исследования.', task:'Воссоздать узнаваемый участок реального здания и сделать перемещение по нему понятным и интересным.', result:'Играбельная 3D-сцена с навигацией, несколькими помещениями и интерактивными объектами.', tags:['3D','Navigation','Interaction']},

  {title:'Voice Lab Controller', track:'robotics', level:'Средний', time:'2 недели', desc:'Голосовое управление физическими устройствами лаборатории через безопасные AI-команды.', task:'Надёжно преобразовать естественную речь в ограниченный набор проверяемых действий над реальным оборудованием.', result:'Связка Speech-to-Text → Tool Calling → IoT с подтверждениями, ограничениями и физической демонстрацией.', tags:['Speech-to-Text','IoT','Tool Calling']},
  {title:'Physical POLY', track:'robotics', level:'Средний / продвинутый', time:'2+ недели', desc:'Настольный AI-робот — физическая оболочка ассистента POLY.', task:'Создать самостоятельный клиент, который слышит человека, общается с POLY и выражает состояние через физический интерфейс.', result:'Рабочий прототип с микрофоном, динамиком, состояниями диалога и связью с серверной системой.', tags:['HRI','Client–Server','Voice']},
  {title:'Talking Plant', track:'robotics', level:'Начальный / средний', time:'1–2 недели', desc:'Растение с датчиками, которое сообщает о состоянии среды в заданном характере.', task:'Разделить реальные измерения, вычисленное состояние и его эмоциональную подачу через AI.', result:'Устройство, считывающее параметры среды и превращающее их в понятные голосовые или текстовые реплики.', tags:['Sensors','ESP32','LLM API']},
  {title:'TAIL Status Cube', track:'robotics', level:'Начальный / средний', time:'1–2 недели', desc:'Физический куб, визуально отображающий состояние цифровых систем лаборатории.', task:'Перевести абстрактный статус сервиса в ясный световой язык и синхронизировать его через API.', result:'Автономный ESP32-объект с несколькими состояниями, сетевым обновлением и понятной индикацией.', tags:['ESP32','API','State Machine']},
  {title:'Smart Demo Stand', track:'robotics', level:'Средний', time:'1–2 недели', desc:'Стенд, который замечает посетителя и управляет сценарием демонстрации.', task:'Спроектировать последовательность показа и переключать её состояния по сигналам физических датчиков.', result:'Интерактивный стенд с детекцией присутствия, state machine и управлением элементами демонстрации.', tags:['Sensors','Interaction','IoT']},
  {title:'AI Drawing Robot', track:'robotics', level:'Продвинутый', time:'3–4 недели', desc:'XY-плоттер, превращающий цифровое описание или AI-промпт в рисунок на бумаге.', task:'Построить полный путь от идеи и векторного представления до координат, движения моторов и физической линии.', result:'Рабочий робот-плоттер с калибровкой, планированием пути и воспроизводимым качеством рисунка.', tags:['Motion Control','Path Planning','AI']},
  {title:'Campus Environment Node', track:'robotics', level:'Начальный / средний', time:'1–2 недели', desc:'IoT-узел мониторинга температуры, влажности, CO₂ и освещённости.', task:'Провести реальные измерения через весь путь: датчик, контроллер, сеть, backend, база и визуализация.', result:'Компактное устройство с телеметрией, API и дашбордом наблюдений за средой колледжа.', tags:['Telemetry','Sensors','Backend']},
  {title:'One-Hand Interface', track:'robotics', level:'Начальный / средний', time:'1–2 недели', desc:'Физический контроллер для выполнения основных компьютерных действий одной рукой.', task:'Создать понятный язык управления множеством действий при ограниченном числе кнопок и органов ввода.', result:'Рабочий эргономичный прототип, проверенный на реальных сценариях и улучшенный по результатам тестов.', tags:['Accessibility','HID','Prototyping']},
  {title:'POLY Button', track:'robotics', level:'Начальный', time:'1 неделя', desc:'Физическая кнопка быстрого голосового обращения к AI-ассистенту POLY.', task:'Сделать одно физическое действие надёжным входом в полный цикл голосового взаимодействия с цифровым агентом.', result:'Кнопка, запускающая запись, отправку запроса, получение ответа и понятную индикацию состояния.', tags:['Physical UI','Voice','ESP32']},

  {title:'TAIL HAND', track:'assistive', level:'Advanced / HOT', time:'4–6 недель', desc:'Роботизированная кисть, которой человек управляет собственной мышечной активностью.', task:'Преобразовать реальный EMG-сигнал в устойчивую команду и управляемое движение механической кисти.', result:'3D-печатный исследовательский прототип: мышца → EMG → обработка → контроллер → движение кисти.', tags:['EMG','Robotics','3D Printing'], hot:true},
  {title:'Smart Cane Prototype', track:'assistive', level:'Средний', time:'1–2 недели', desc:'Сенсорный модуль для трости с тактильным предупреждением о препятствиях.', task:'Спроектировать интуитивный физический язык, который переводит расстояние до объекта в паттерны вибрации.', result:'Проверенный с пользователями прототип с датчиком расстояния, несколькими режимами и haptic-обратной связью.', tags:['Haptic UX','Sensors','User Testing']},
  {title:'Presentation BioCoach', track:'assistive', level:'Продвинутый', time:'3–4 недели', desc:'Wearable-система анализа физиологических показателей во время выступлений.', task:'Записывать биосигналы с baseline, отделять измерение от интерпретации и давать осторожную обратную связь.', result:'Система с сессиями выступлений, временными рядами, визуализацией и персональным AI-резюме.', tags:['Biosensors','Time Series','Wearable']},

  {title:'NeuroControl Lab', track:'hci', level:'Advanced / HOT', time:'4–6 недель', desc:'Платформа, превращающая EMG, IMU и PPG-сигналы тела в язык команд.', task:'Сравнить способы телесного управления на общей измеримой платформе: от калибровки до распознавания паттернов.', result:'Экспериментальный стенд для записи, классификации и количественного сравнения мультимодальных интерфейсов.', tags:['Bio Signals','ML','Calibration'], hot:true},
  {title:'EEG Interface', track:'hci', level:'Advanced / HOT', time:'4–6 недель', desc:'Экспериментальная BCI-система визуализации и преобразования EEG в команды.', task:'Пройти путь от сырого сигнала и частотного анализа до контролируемого эксперимента и real-time классификации.', result:'Исследовательский интерфейс с acquisition, обработкой, извлечением признаков и демонстрацией BCI-управления.', tags:['EEG','FFT','BCI'], hot:true}
];

const directionGrid = document.querySelector('#directionGrid');
const filters = document.querySelector('#filters');
const projectGrid = document.querySelector('#projectGrid');
const searchInput = document.querySelector('#searchInput');
const resultCount = document.querySelector('#resultCount');
const emptyState = document.querySelector('#emptyState');
const resetButton = document.querySelector('#resetFilters');
const dialog = document.querySelector('#projectDialog');
const dialogContent = document.querySelector('#dialogContent');
let activeTrack = 'all';

const getDirection = id => directions.find(item => item.id === id);
const countFor = id => id === 'all' ? projects.length : projects.filter(p => p.track === id).length;

function renderDirections() {
  directionGrid.innerHTML = directions.slice(1).map((item, index) => `
    <button class="direction-card${activeTrack === item.id ? ' active' : ''}" data-track="${item.id}" type="button">
      <span class="direction-top"><span>${String(index + 1).padStart(2, '0')}</span><span class="direction-icon">${item.icon}</span></span>
      <span class="arrow">↘</span>
      <h3>${item.label}</h3>
      <p>${countFor(item.id)} ${plural(countFor(item.id))}</p>
    </button>`).join('');
}

function renderFilters() {
  filters.innerHTML = directions.map(item => `<button class="filter${activeTrack === item.id ? ' active' : ''}" type="button" data-track="${item.id}">${item.short}</button>`).join('');
}

function plural(number) {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return 'проектов';
  if (n1 > 1 && n1 < 5) return 'проекта';
  if (n1 === 1) return 'проект';
  return 'проектов';
}

function filteredProjects() {
  const query = searchInput.value.trim().toLocaleLowerCase('ru');
  return projects.filter(p => {
    const byTrack = activeTrack === 'all' || p.track === activeTrack;
    const haystack = [p.title, p.desc, p.task, p.result, ...p.tags, getDirection(p.track).label].join(' ').toLocaleLowerCase('ru');
    return byTrack && (!query || haystack.includes(query));
  });
}

function renderProjects() {
  const list = filteredProjects();
  resultCount.textContent = `${list.length} ${plural(list.length)}`;
  emptyState.hidden = list.length !== 0;
  projectGrid.hidden = list.length === 0;
  projectGrid.innerHTML = list.map(project => {
    const sourceIndex = projects.indexOf(project);
    const direction = getDirection(project.track);
    return `<article class="project-card${project.hot ? ' hot' : ''}" data-index="${sourceIndex}">
      <div class="card-top"><span class="card-track"><i></i>${direction.short}</span><span class="card-number">${String(sourceIndex + 1).padStart(2, '0')} / ${projects.length}</span></div>
      ${project.hot ? '<span class="hot-label">HOT PROJECT</span>' : ''}
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <div class="card-bottom"><div class="meta"><span><b>Уровень</b>${project.level.split(' / ')[0]}</span><span><b>Срок</b>${project.time}</span></div><button class="open-project" type="button" aria-label="Подробнее о проекте ${project.title}">↘</button></div>
    </article>`;
  }).join('');
}

function setTrack(track, scroll = false) {
  activeTrack = track;
  renderDirections();
  renderFilters();
  renderProjects();
  if (scroll) document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
}

function openProject(index, updateHash = true) {
  const p = projects[index];
  if (!p) return;
  const direction = getDirection(p.track);
  dialogContent.innerHTML = `<div class="dialog-body">
    <p class="eyebrow"><span></span>${direction.label}${p.hot ? ' / HOT PROJECT' : ''}</p>
    <h2 id="dialogTitle">${p.title}</h2>
    <p class="dialog-description">${p.desc}</p>
    <div class="dialog-meta"><div><span>Сложность</span><strong>${p.level}</strong></div><div><span>Срок</span><strong>${p.time}</strong></div></div>
    <section class="dialog-section"><h3>Задача</h3><p>${p.task}</p></section>
    <section class="dialog-section"><h3>Результат</h3><p>${p.result}</p></section>
    <section class="dialog-section"><h3>Технологии и навыки</h3><div class="dialog-tags">${p.tags.map(tag => `<span>${tag}</span>`).join('')}</div></section>
  </div>`;
  document.body.classList.add('dialog-open');
  dialog.showModal();
  if (updateHash) history.replaceState(null, '', `#project-${index + 1}`);
}

function closeDialog() {
  dialog.close();
  document.body.classList.remove('dialog-open');
  if (location.hash.startsWith('#project-')) history.replaceState(null, '', '#projects');
}

directionGrid.addEventListener('click', event => {
  const card = event.target.closest('[data-track]');
  if (card) setTrack(card.dataset.track, true);
});
filters.addEventListener('click', event => {
  const filter = event.target.closest('[data-track]');
  if (filter) setTrack(filter.dataset.track);
});
projectGrid.addEventListener('click', event => {
  const card = event.target.closest('.project-card');
  if (card) openProject(Number(card.dataset.index));
});
searchInput.addEventListener('input', renderProjects);
resetButton.addEventListener('click', () => { searchInput.value = ''; setTrack('all'); searchInput.focus(); });
document.addEventListener('keydown', event => {
  if (event.key === '/' && document.activeElement !== searchInput && !dialog.open) { event.preventDefault(); searchInput.focus(); }
});
dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

renderDirections();
renderFilters();
renderProjects();
document.querySelector('#year').textContent = new Date().getFullYear();

const hashMatch = location.hash.match(/^#project-(\d+)$/);
if (hashMatch) openProject(Number(hashMatch[1]) - 1, false);
