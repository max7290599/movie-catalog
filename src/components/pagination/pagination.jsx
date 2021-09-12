import React from 'react';
import PagePomponent from './page-component';
import './pagination.css';

const Pagination = ({setDataMovie, searchMovie, setSearchTotalResults, searchTotalResults}) => {
  const [countPage, setCountPage] = React.useState(10);
  const [isDisabledLeftBtn, setIsDisabledLeftBtn] = React.useState(true);
  const [isDisabledRightBtn, setIsDisabledRightBtn] = React.useState(false);

  const setDisableBtn = () => {
    if (countPage <= 10) {
      setIsDisabledLeftBtn(true);
    } else {
      setIsDisabledLeftBtn(false);
    };

    if (searchTotalResults/10 <= countPage) {
      setIsDisabledRightBtn(true);
    } else {
      setIsDisabledRightBtn(false);
    };
  };

  React.useEffect(() => {
    setDisableBtn();
  }, [countPage, searchTotalResults]);

  const leftBtnHandle = () => {
    setCountPage(countPage - 10);
  };

  const RightBtnHandle = () => {
    setCountPage(countPage + 10);
  };

  const listPage = () => {
    let page = [];
    for(let i = countPage - 9; i <= countPage; i++) {
      if (searchTotalResults >= i * 10) {
        page.push(i);
      }        
    }
    return page;
  }

  return (
    <div className="pagination">
      <button className="btn-left btn" disabled={isDisabledLeftBtn} onClick={leftBtnHandle} >{`<`}</button>
      {listPage().map((item) =>
      <PagePomponent         
        setDataMovie={setDataMovie}
        searchMovie={searchMovie}
        setSearchTotalResults={setSearchTotalResults} 
        numberPage={item}
        key={item.toString()}
        />
      )}
      <button className="btn-right btn" disabled={isDisabledRightBtn} onClick={RightBtnHandle} >{`>`}</button>
    </div>
  );
}

export default Pagination;