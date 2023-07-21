import { useCallback, useMemo , useRef , MouseEvent, FC} from 'react'

interface ChildProps {
  callback: (menuName: string) => void;
}

const  MenuList : FC<ChildProps> = ({callback})  => {
  const menus = useMemo<string[]>(() => ['internet work','http','browser','dns',
                                        'domain','hosting','arrowFC','reactFC','reactState',
                                        'reactMount','diffEffectMount','reactHooks','openAi','stableDiffusion','styleDrop','midjourney'], [])

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const menuClick = (e : MouseEvent<HTMLButtonElement>) => {

    let _menuName : string  = typeof(e.currentTarget.textContent)==='string'?e.currentTarget.textContent : ""

    callback(_menuName)
  }

  const menusEl = useMemo(
    () =>
      menus.map((menu,index) => (
        <li>
          <button
            className="ml-4 text-lg font-medium "
            onClick={menuClick}
            key={index}
          >
            {menu}
          </button>
        </li>
      )),
    [menus]
  )
  return (
    <div className="w-1/5 h-screen text-sm bg-gray-200 md:text-lg sm:hidden">
      <div className="flex items-center">
        <ul>{menusEl}</ul>
      </div>
    </div>
  )
}

export default MenuList