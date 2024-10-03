import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TopBar = () => {
    const dispatch = useDispatch();
    const { isVisible, barType } = useSelector((state: RootState) => state.bar);
    if (!isVisible || !barType) return null;

    const getBarMessage = () => {
        switch (barType) {
            case 'Home':
                return '회원정보 관리';
            default :
                return '';
        }
    };

    return(
        <div className="bg-gray-200 p-2 border-b border-gray-300">
            <h2 className="text-base text-gray-800">{getBarMessage()}</h2>
        </div>
    )
}

export default TopBar;