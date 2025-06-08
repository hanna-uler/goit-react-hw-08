import css from './SearchBox.module.css'
import { LuUserRoundSearch } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

export default function SearchBox() {
    const query = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    return (
        <div className={css.container}>
            <label htmlFor='searchInput'><LuUserRoundSearch className={css.icon} size="1.5rem"/>Find contacts by name</label>
            <input
                className={css.input}
                type='text'
                id='searchInput'
                value={query}
                onChange={(evt)=> dispatch(changeFilter(evt.target.value))}
            />
        </div>
    )
    
}
