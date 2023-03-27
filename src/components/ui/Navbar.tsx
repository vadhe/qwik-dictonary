import { component$ } from "@builder.io/qwik";
import { BsJournalBookmark } from "@qwikest/icons/bootstrap";

export default component$(() => {
    return(
        <div class="bg-red-500 flex justify-between items-center">
         <BsJournalBookmark />
         <div>
            <p>serif</p>
            <p>arrow</p>
            <p>slash</p>
            <p>switcher</p>
            <p>darkmode</p>
         </div>
        </div>
    )
})