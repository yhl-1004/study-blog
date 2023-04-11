import { useCallback, useMemo } from 'react'

export default function MenuList() {
  const menus = useMemo<string[]>(() => ['20230411'], [])

  const menuClick = useCallback(() => {
    alert('??')
  }, [])

  const menusEl = useMemo(
    () =>
      menus.map((menu) => (
        <button
          className="ml-4 text-lg font-medium "
          onClick={(e) => menuClick()}
        >
          {menu}
        </button>
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
