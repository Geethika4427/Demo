import CreateRuleForm from "./Components/CreateRuleForm";
import EvaluateForm from "./Components/EvaluateForm";


const App = () => {
    return (
        <div>
            <h1>Rule Engine Application</h1>
            <CreateRuleForm/>
            <EvaluateForm/>
            
        </div>
    );
};

export default App;