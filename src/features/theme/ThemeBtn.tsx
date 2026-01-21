import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/Store";
import { dark, light } from "./themeSlice";
import "./style.css"
export default function ThemeBtn() {
  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
  const theme = useSelector((state: RootState) => state.theme.value);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatchTheme = useDispatch();

  return (
    <>  
        <button onClick={()=>dispatchTheme(theme === "light" ? dark() :   light())}
          className={` rounded-2xl cursor-pointer p'-1 textred-500 bgred-500 `}>
            <span className="color-theme__option  " data-mode={theme === "light" ? "light" : theme === "dark" ? "dark" :undefined}></span>
        </button>
    </>
  );
}