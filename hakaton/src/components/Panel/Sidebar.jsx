import buildings from '../../img/buildings.svg'
import favorite from '../../img/favorite-chart.svg'
import folderOpen from '../../img/folder-open.svg'
import logout from '../../img/logout.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  function exit() {
    document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.reload();
  }

  return (
    <div className="flex flex-col h-screen justify-between pl-[30px] pt-[142px] pr-[26px]">
      <ul className="text-[25px]">
        <li className="flex space-x-2 pl-[9px] items-center h-[62px] w-[201px] rounded-[15px]">
          <img src={folderOpen} alt="reports-icon" />
          <NavLink to="/panel" activeClassName="bg-[#E672B6]" className="hover:bg-[#E672B6]">
            Отчеты
          </NavLink>
        </li>
        <li className="flex space-x-2 pl-[9px] items-center h-[62px] w-[201px] rounded-[15px]">
          <img src={favorite} alt="ratings-icon" />
          <NavLink to="/panel/rating" activeClassName="bg-[#E672B6]" className="hover:bg-[#E672B6]">
            Рейтинг
          </NavLink>
        </li>
        <li className="flex space-x-2 pl-[9px] items-center h-[62px] w-[201px] rounded-[15px]">
          <img src={buildings} alt="companies-icon" />
          <NavLink to="/panel/company" activeClassName="bg-[#E672B6]" className="hover:bg-[#E672B6]">
            Компании
          </NavLink>
        </li>
      </ul>
      <button className="pl-4 mb-[27px]" onClick={exit}>
        <img src={logout} alt="logout-icon" />
      </button>
    </div>
  );
};

export default Sidebar;
