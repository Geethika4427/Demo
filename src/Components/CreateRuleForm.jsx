import { useState } from 'react';
import axios from 'axios';

const CreateRuleForm = () => {
    const [ruleString, setRuleString] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9090/api/rules', { ruleString });
            console.log('Rule created:', response.data);
        } catch (error) {
            console.error('Error creating rule:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={ruleString}
                onChange={(e) => setRuleString(e.target.value)}
                placeholder="Enter rule string"
                required
            />
            <button type="submit">Create Rule</button>
        </form>
    );
};

export default CreateRuleForm;
