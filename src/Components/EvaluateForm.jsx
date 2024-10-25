import { useState } from 'react';
import axios from 'axios';


const EvaluateForm = () => {
    const [userData, setUserData] = useState({
        age: '',
        department: '',
        salary: '',
        experience: ''
    });
    const [evaluationResult, setEvaluationResult] = useState(null);

    const handleEvaluation = async (e) => {
        e.preventDefault();

        // Convert user data to appropriate types
        const parsedUserData = {
            age: parseInt(userData.age, 10),
            department: userData.department,
            salary: parseInt(userData.salary, 10),
            experience: parseInt(userData.experience, 10)
        };

        try {
            // Make an API call to evaluate the rule (replace with your actual endpoint)
            const response = await axios.post('http://localhost:9090/api/rules/evaluate', parsedUserData);
            setEvaluationResult(response.data); // Expecting a boolean response (true/false)
        } catch (error) {
            console.error('Error evaluating rule:', error);
            setEvaluationResult('Error evaluating rule. Please try again.');
        }
    };

    return (
        <div className="evaluate-form-container">
            <h3>Evaluate User Eligibility</h3>
            <form onSubmit={handleEvaluation}>
                <input
                    type="number"
                    placeholder="Age"
                    value={userData.age}
                    onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={userData.department}
                    onChange={(e) => setUserData({ ...userData, department: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Salary"
                    value={userData.salary}
                    onChange={(e) => setUserData({ ...userData, salary: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Experience"
                    value={userData.experience}
                    onChange={(e) => setUserData({ ...userData, experience: e.target.value })}
                    required
                />
                <button type="submit">Evaluate Rule</button>
            </form>

            {evaluationResult !== null && (
                <div className={evaluationResult === true ? "evaluate-result" : "evaluate-error"}>
                    <h3>Evaluation Result:</h3>
                    <p>{evaluationResult === true ? "Eligible" : "Not Eligible"}</p>
                </div>
            )}
        </div>
    );
};

export default EvaluateForm;
