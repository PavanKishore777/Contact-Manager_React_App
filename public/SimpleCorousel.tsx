// import React, {useState} from 'react';
// import './TodoCalendarApp.css'; import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
//
// interface TaskByDate {
//     [date: string]: string[];
// }
//
// const TodoCalendarApp: React.FC = () => {
//     const [tasksByDate, setTasksByDate] = useState<TaskByDate>({});
//     const [selectedDate, setSelectedDate] = useState<string>('');
//     const [currentMonth, setCurrentMonth] = useState<number>(1);
//     const [currentYear, setCurrentYear] = useState<number>(2023);
//
//     const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate();
//     const startDayOfMonth = (month: number, year: number) => new Date(year, month - 1, 1).getDay();
//
//     const generateCalendar = () => {
//         const totalDays = daysInMonth(currentMonth, currentYear);
//         const startingDay = startDayOfMonth(currentMonth, currentYear);
//
//         const calendar = [];
//
//         for (let i = 0; i < startingDay; i++) {
//             calendar.push(<div key={`empty-${i}`} className="empty-day"></div>);
//         }
//
//         for (let day = 1; day <= totalDays; day++) {
//             const date = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
//             calendar.push(
//                 <div
//                     key={date}
//                     className={`day ${selectedDate === date ? 'selected' : ''}`}
//                     onClick={() => handleDayClick(date)}
//                 >
//                     {day}
//                 </div>
//             );
//         }
//
//         return calendar;
//     };
//
//     const handleDayClick = (date: string) => {
//         setSelectedDate(date);
//         const todosForDate = tasksByDate[date] || [];
//         setTasksByDate({
//             ...tasksByDate,
//             [date]: todosForDate,
//         });
//     };
//
//     const deleteTask = (date: string, taskText: string) => {
//         const updatedTasks = tasksByDate[date].filter((task) => task !== taskText);
//         setTasksByDate({
//             ...tasksByDate,
//             [date]: updatedTasks,
//         });
//     };
//
//     const updateTaskList = (dateString: string) => {
//         const taskInput = document.getElementById('taskInput') as HTMLInputElement;
//         const taskText = taskInput.value.trim();
//
//         if (taskText !== '') {
//             const tasksForDate = tasksByDate[dateString] || [];
//             setTasksByDate({
//                 ...tasksByDate,
//                 [dateString]: [...tasksForDate, taskText],
//             });
//
//             taskInput.value = '';
//         }
//     };
//
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 7, // Adjust the number of slides to show
//         slidesToScroll: 1,
//         centerMode: true,
//     };
//
//     return (
//         <div>
//             <label htmlFor="datepicker">Select Date: </label>
//             <input
//                 type="date"
//                 id="datepicker"
//                 onChange={(event) => {
//                     const selectedDate = event.target.value;
//                     setSelectedDate(selectedDate);
//                     setCurrentYear(parseInt(selectedDate.split('-')[0], 10));
//                     setCurrentMonth(parseInt(selectedDate.split('-')[1], 10));
//                 }}
//                 value={selectedDate}
//             />
//
//             <div id="taskList">
//                 <h2>Tasks for Selected Date</h2>
//                 <ul id="tasks">
//                     {tasksByDate[selectedDate] &&
//                         tasksByDate[selectedDate].map((taskText, index) => (
//                             <li key={index} className="task">
//                                 <span>{taskText}</span>
//                                 <span
//                                     className="delete"
//                                     onClick={() => deleteTask(selectedDate, taskText)}
//                                 >
//                   Delete
//                 </span>
//                             </li>
//                         ))}
//                 </ul>
//                 <input type="text" id="taskInput" placeholder="Add a new task"/>
//                 <button onClick={() => updateTaskList(selectedDate)}>Add Task</button>
//             </div>
//
//             <Slider {...settings}>
//                 {generateCalendar()}
//             </Slider>
//         </div>
//     );
// };
//
// export default TodoCalendarApp;
