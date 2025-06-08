import css from "./Loader.module.css"
import { RiseLoader } from "react-spinners"

export default function Loader() {
    return (
        <div className={css.container}>
            <RiseLoader color="#82c798" size={24}/>
            <p className={css.message}>One moment please, the data is loading...</p>
        </div>
    )
}
