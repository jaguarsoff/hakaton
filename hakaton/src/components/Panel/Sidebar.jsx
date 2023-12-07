import folderOpen from '../../img/folder-open.svg'
import logout from '../../img/logout.svg'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  function exit() {
    document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.reload();
  }
  return (
    <div className="flex flex-col h-screen justify-between pl-[30px] pt-[142px] pr-[26px]">
      <ul className="text-[25px]">
        <li className="flex space-x-2 pl-[9px] items-center h-[62px] w-[201px] bg-[#E672B6] rounded-[15px]">
          <img src={folderOpen} alt="reports-icon" />
          <Link to="/panel">Отчеты</Link>
        </li>
        <li className="flex space-x-2 pl-[9px] items-center h-[62px] w-[201px] rounded-[15px]">
          <img src={folderOpen} alt="ratings-icon" />
          <Link to="/panel/rating">Рейтинг</Link>
        </li>
        <li className="flex space-x-2 pl-[9px] items-center h-[62px] w-[201px] rounded-[15px]">
          <img src={folderOpen} alt="companies-icon" />
          <Link to="/panel/company">Компании</Link>
        </li>
      </ul>
      <button className="pl-4 mb-[27px]" onClick={exit}>
        <img src={logout} alt="logout-icon" />
      </button>
    </div>
  )
}

export default Sidebar