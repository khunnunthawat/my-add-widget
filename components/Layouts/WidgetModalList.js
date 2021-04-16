import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai';
import { RiIncreaseDecreaseLine } from 'react-icons/ri';
import { IoTimerOutline } from 'react-icons/io5';
import WidgetMenuList from '../Widgets/WidgetMenuList';

function WidgetModalList() {

  let iconClass = 'mx-auto text-4xl';
  
  return (
    <>
      <WidgetMenuList title='JustSay'>
        <AiOutlineMessage className={`${iconClass}`} />
      </WidgetMenuList>
      <WidgetMenuList title='Counter'>
        <RiIncreaseDecreaseLine className={`${iconClass}`} />
      </WidgetMenuList>
      <WidgetMenuList title='Timer'>
        <IoTimerOutline className={`${iconClass}`} />
      </WidgetMenuList>
    </>
  );
}

export default WidgetModalList;