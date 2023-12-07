
import Header from './Panel/Header';
import Sidebar from './Panel/Sidebar';
import Content from './Panel/Content';

function Panel() {
  return (
    <div className="panel">
      <Header></Header>
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default Panel;
