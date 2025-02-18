import ChevronDownIcon from  '@heroicons/react/24/outline/ChevronDownIcon'
import {useEffect, useState} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SidebarSubmenu({submenu, name, icon}:{submenu: any, name: string, icon: any}) {
    const pathname = usePathname()
    const [isExpanded, setIsExpanded] = useState(false)


    /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
    useEffect(() => {
        if(submenu.filter(m => {return m.path === pathname})[0])setIsExpanded(true)
    }, [])

    return (
        <div className='flex flex-col'>

            {/** Route header */}
            <div className='w-full flex flex-row justify-between items-center' onClick={() => setIsExpanded(!isExpanded)}>
                <div className='flex flex-row  gap-1 items-center'>{icon} {name} </div>
                <ChevronDownIcon className={'w-5 h-5  float-right delay-400 duration-500 transition-all  ' + (isExpanded ? 'rotate-180' : '')}/>
            </div>

            {/** Submenu list */}
            <div className={` w-full `+ (isExpanded ? "" : "hidden")}>
                <ul className={`menu menu-compact`}>
                {
                    submenu.map((m, k) => {
                        return(
                            <li key={k}>
                                <Link href={m.path}>
                                    {m.icon} {m.name}
                                    {
                                            pathname == m.path ? (<span className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                aria-hidden="true"></span>) : null
                                    }
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default SidebarSubmenu