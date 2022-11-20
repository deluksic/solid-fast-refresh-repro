import { state } from './store';

function Sub() {
    return <div>
        works ??? {state()}
    </div>;
}

export default Sub