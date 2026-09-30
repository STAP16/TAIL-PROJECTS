# 🔥 HOT PROJECT — NeuroControl Lab

## Направление

**Human–Machine Interfaces**

Дополнительные направления: **Bio Signals · Signal Processing · Embedded Systems · HCI · ML**

## Уровень сложности

**Advanced / HOT PROJECT**

## Срок

4–6 недель

## Проблема

Почти все привычные способы управления компьютером основаны на нескольких стандартных действиях: **рука → мышь**, **пальцы → клавиатура**, **палец → touchscreen**, **голос → microphone**. Но человеческое тело постоянно создаёт множество других измеримых сигналов: **EMG** (электрическая активность мышц), **PPG** (изменения кровенаполнения тканей, пульс), **IMU** (движение и положение части тела).

Возникает вопрос: можно ли превратить несколько сигналов человеческого тела в полноценный альтернативный контроллер?

## Задача

Создать **NeuroControl Lab** — экспериментальную платформу, которая получает несколько сигналов человека, обрабатывает их и преобразует в команды управления внешней системой.

```text
EMG → ACTION
Hand Movement → DIRECTION
Gesture → SELECT
```

Пользователь управляет: игрой, роботом, интерфейсом, виртуальным объектом, Physical POLY, другим проектом TAIL.

Базовая архитектура:

**Human → Sensors → Signals → Processing → Recognition → Commands → Target System**

## Связи

- Смежный проект: [[TAIL HAND - Прототип роботизированной кисти|HOT PROJECT — TAIL HAND]] (EMG, биосигнал, сигнальная обработка)
- Смежный проект (HCI): [[One-Hand Interface - Однорукий интерфейс|One-Hand Interface]]
- Целевая система: [[Physical POLY - Физическая оболочка POLY|Physical POLY]]
- Родительский проект: [[TAIL MINILAB|TAIL MINILAB]]

## Почему Lab

Ключевое слово здесь — **Lab**. Цель — не собрать один раз «джойстик, который работает мышцами», а создать небольшую экспериментальную платформу Human–Machine Interaction.

Сегодня: EMG управляет простой игрой. Завтра: EMG + IMU управляют роботом. Позже: один из каналов заменяется EEG. Сенсорный слой и управляемая система должны быть разделены.

```text
INPUT: EMG / IMU / PPG → SIGNAL PROCESSING → COMMANDS (LEFT/RIGHT/SELECT/BACK/ACTION) → TARGET (Game / Robot / Interface)
```

## Level 1 — One BioSignal

Начать с одного сигнала (например, EMG). Без управления — только **Sensor → Raw Data → Visualization**. Понять baseline, где полезный сигнал, насколько он повторяем, откуда шум.

## Level 2 — BioSignal as Button

Сигнал превращается в простейший input: сокращение мышцы → `ACTION` (биологическая кнопка). Первый момент, когда тело становится контроллером.

## Level 3 — Continuous Control

Эксперимент: обязательно ли биосигнал должен превращаться только в `ON/OFF`? Сила обработанного сигнала может управлять параметром (Low → 20%, Medium → 50%, High → 100%). Интерфейс становится аналоговым: **Signal Intensity → Control Value**.

## Level 4 — Multimodal Control

Подключается второй канал (например, EMG + IMU):

```text
IMU → Direction
EMG → Action
```

Несколько физических сигналов → один язык управления.

## Level 5 — Calibration

HMI должен учитывать конкретного человека. Перед использованием запускается CALIBRATION: система собирает REST / ACTIVE / MOVEMENT и формирует параметры сессии или пользователя. Фундаментальная проблема: интерфейс должен заставлять человека адаптироваться к машине или машина должна адаптироваться к человеку?

## Level 6 — Command Layer

Отвязать биосигналы от конкретного приложения. Плохо: `EMG → jump()`. Лучше:

```text
EMG → Signal Processor → ACTION → Game Adapter → jump()
```

Тогда `ACTION` завтра можно передать роботу через Robot Adapter (`grab()`). Один Human Interface управляет разными системами.

## Level 7 — Pattern Recognition

Перестать работать только с одним threshold. Собирается набор сигналов (Pattern A/B/C) и исследуется, можно ли устойчиво различать их. Появляется **Signal → Features → Classifier → Command**. ML возникает естественно как инструмент распознавания.

## Level 8 — Control Arena

NeuroControl Lab становится настоящим демонстрационным проектом. Создаётся одна тестовая среда (например, простая игра). Задача: выполнить её обычным контроллером, а затем NeuroControl. Измеряются время, ошибки, ошибочные команды, задержка, точность распознавания. Интерфейсы можно сравнивать количественно.

## Level 9 — Plug-in Sensors

Продвинутая архитектура позволяет подключать новые источники:

```text
Human Input Layer: EMG Adapter / IMU Adapter / PPG Adapter / EEG Adapter
```

Каждый преобразует собственные данные в понятный системе формат. NeuroControl Lab становится фундаментом для следующего проекта — **EEG Interface**.

## Что предстоит изучить

Bio Signals, EMG, IMU, PPG, Signal Processing, Time-Series, Filtering, Calibration, Feature Extraction, Classification, Embedded Systems, HCI, Event Systems и основы Machine Learning.

## Полученные навыки

Biosignal Processing, Human–Machine Interaction, Multimodal Interfaces, Signal Processing, Hardware–Software Integration, ML Classification и экспериментальная разработка интерфейсов.

Главная компетенция:

> **умение превращать физический сигнал человека в формальный язык команд машины.**

## Результат

Работающий **NeuroControl Lab v0.1**, в котором минимум один реальный биосигнал используется для управления внешней цифровой или физической системой.

Продвинутая версия: **Multiple Human Signals → Processing → Command Layer → Different Machines**

## Demo Day

Перед участником находится компьютер. Мышь и клавиатура отключены. На экране — простая задача. Участник надевает сенсоры, запускается CALIBRATION, и он начинает управлять системой. На втором экране виден технический pipeline:

```text
EMG + IMU → GESTURE → COMMAND → GAME
```

Зритель видит, как действие человеческого тела проходит через всю систему и превращается в команду компьютера.
