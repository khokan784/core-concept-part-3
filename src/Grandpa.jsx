import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import './grandpa.css'

const Grandpa = () => {
    return (
        <div className="granpa">
            <h2>Granpa</h2>
            <section className="flex">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;