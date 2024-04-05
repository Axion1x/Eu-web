import "./../styles.css";

const Example = () => {
return (
    <div className="exampleContainer">
       <div className="exampleHeader">Інструкція щодо використання додатку</div>
        <div className="smContainer">
        <div>1. Натисніть на кнопку "Курс". Ви побачите перелік курсів, оберіть власний та натисніть на нього.</div>
        <img src="img1.PNG" alt="" className="img" />
        <div>2. Натисніть на кнопку "Спеціальність". Ви побачите перелік спеціальностей, оберіть власниу та натисніть на неї. </div>
        <img src="img2.PNG" alt="" className="img" />
        <div>3. Натисніть на поле для введення, ви побачите список студентів. Розпочніть вводити власне ім'я. Як тільки побачите в спику власне - натисніть на нього. </div>
        <img src="img3.PNG" alt="" className="img" />
        <div>4. Тепер ви можете перевірити власні оцінки в таблиці </div>
        <img src="img4.PNG" alt="" className="img" />
       </div>

    </div>
    
)
}


export default Example;