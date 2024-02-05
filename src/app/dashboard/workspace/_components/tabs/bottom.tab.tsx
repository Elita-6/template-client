import {clsx} from "clsx";

export default  function BottomTab({isActive, label}: {isActive: boolean, label: string}) {
    return (
        <li className="me-2">
            <a href="#" className={clsx(
                "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
                {
                    "border-primary text-primary": isActive
                })
            }
            >
                {label}
            </a>
        </li>
    )
}