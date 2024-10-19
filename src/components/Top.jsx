
import { Button , Flex} from 'antd';
import '../css/Top.css';
import Register_Form from './Register_Form';
import Log_In_Form from './Log_In_Form';

const Top = ({chng_comp}) => {
    return (
        <Flex justify='space-between' className='top'>
            <h1>ICE</h1>
            <p>E-mail: ice@ru.ac.bd</p>
            <Flex gap='small' align='center' className='top_btn'>
                <Button type='primary' onClick={() => chng_comp(<Log_In_Form/>)}>Log In</Button>
                <Button type='primary' onClick={() => chng_comp(<Register_Form/>)}>Resister</Button>
            </Flex>
        </Flex>
    );
}

export default Top;



