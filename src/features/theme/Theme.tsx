import { MdOutlineLightMode, MdOutlineDarkMode, MdSettingsSystemDaydream} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/Store";
import { dark, light, system } from "./themeSlice";

export default function BTNTheme() {
  const theme = useSelector((state:RootState) => state.theme.value)
  const dispatch = useDispatch()
  
  return (
    <div className=" inl p-0.5 px-1 flex flex-row gap-0.5 h-full rounded-full bg-gray-950/5 text-gray-950 dark:bg-white/10 dark:text-white  ">
      <span
        onClick={() => dispatch(light()) }
        className=" rounded-full *:p-0.5 max-sm:p-0.5 *:size-full data-checked:bg-white data-checked:ring data-checked:inset-ring data-checked:ring-gray-950/10 data-checked:inset-ring-white/10 dark:data-checked:bg-gray-700 dark:data-checked:text-white dark:data-checked:ring-transparent"
        role="radio" data-checked={ (theme==="light")?"": undefined} >
        <MdOutlineLightMode className=" flex m-auto "/>
      </span>

      <span
        onClick={() => dispatch(dark())}
        className=" rounded-full *:p-0.5 max-sm:p-0.5 *:size-full data-checked:bg-white data-checked:ring data-checked:inset-ring data-checked:ring-gray-950/10 data-checked:inset-ring-white/10 dark:data-checked:bg-gray-700 dark:data-checked:text-white dark:data-checked:ring-transparent"
     role="radio" data-checked={ (theme==="dark")?"": undefined}  >
        <MdOutlineDarkMode />
      </span>

      <span
        onClick={() => dispatch(system())}
        className=" rounded-full *:p-1 max-sm:p-0.5 *:size-full data-checked:bg-white data-checked:ring data-checked:inset-ring data-checked:ring-gray-950/10 data-checked:inset-ring-white/10 dark:data-checked:bg-gray-700 dark:data-checked:text-white dark:data-checked:ring-transparent"
      role="radio" data-checked={ (theme==="system")?"": undefined} >
        <MdSettingsSystemDaydream />
      </span>
    </div>
  );
}