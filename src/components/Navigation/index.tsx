import { navigation } from "./navigation"


const Navigation = () => {

    return (
        <nav className="p-6 w-full flex flex-col flex-wrap">
            <ul className="space-y-1.5">
                {navigation.map(({id,name,path, submenu}) => {
                    return (
                        <li key={id}>
                            <a className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100`} href={path}>
                                {name}
                            </a>
                            <ul className="space-y-1.5 pl-5">
                                {submenu?.map(({id,name,path}) => {
                                    return (
                                        <li key={id}>
                                            <a className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100`} href={path}>
                                                {name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation