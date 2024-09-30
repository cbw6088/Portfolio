import { createWrapper } from 'next-redux-wrapper';

const configureStore = () => {
	
   
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
}); // 두번째는 옵션 객체

export default wrapper