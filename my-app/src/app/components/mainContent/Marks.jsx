import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMarks } from '@/redux/features/marksSlice'; 


const Marks = () => {
    const { studentName, studentYear, studentSpec } = useSelector((state) => state.inputData); // Отримання даних зі слайса inputData
    const { data, loading, error } = useSelector((state) => state.marks); // Отримання даних про оцінки зі стору
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMarks());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const renderTable = () => {
        if (!studentName) return <div>Введіть ім'я щоб побачити таблицю..</div>;

        const studentData = data[studentName];
        if (!studentData) return <div>Не знайдено ...</div>;

        return (
            <div className="tableContainer">
                {studentData.semesters.map((semester, index) => (
                    <div key={index}>
                        <div className="h2">{semester.name}</div>
                        {semester.subjects.map((subject, index) => (
                            <div key={index} className="line">
                                <div className="name">{subject.name}</div>
                                <div className="marks">{subject.grade}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="exampleContainer">
            {renderTable()}
        </div>
    );
};

export default Marks;
