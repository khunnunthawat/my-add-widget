import React, { useState } from 'react';
import Btn from './Btn';
import ModalCard from './Modals/ModalCard';
import WidgetMenuCard from './Widgets/WidgetMenuCard';
// icon
import { RiAddCircleLine, RiIncreaseDecreaseLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoTimerOutline } from 'react-icons/io5';
import { TextHead } from './Modals/TextHead';
import FormCounter from './AddWidgets/FormCounter';
import FormJustSay from './AddWidgets/FormJustSay';

import JustSay from './Widgets/JustSay';

export default function WidgetContent() {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustsay, setModalActiveJustsay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveTimer, setModalActiveTimer] = useState(false);

  const [titleJustsay, setTitleJustsay] = useState('');
  const [addCounter, setCouter] = useState('');
  const [listAllWidgets, setListAllWidgets] = useState([]);

  const handleClickMenu = function () {
    setModalActiveMenu(true);
  };

  const handleClickJustsay = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(true);
    setTitleJustsay();
  };

  const handleClickCounter = function () {
    setModalActiveMenu(false);
    setModalActiveCounter(true);
    setCouter();
  };

  const handleClickTimer = function () {
    setModalActiveMenu(false);
    setModalActiveTimer(true);
  };

  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(false);
    setModalActiveCounter(false);
    setModalActiveTimer(false);
  };

  let d = new Date();
  let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  var n = d.toLocaleString([], { hour12: true });

  let DateTime = `Added on ${n}`;

  const handleTitleJustsay = function () {
    if (listAllWidgets.length > 0) {
      console.log(listAllWidgets);
      return <JustSay title={titleJustsay} listAllWidgets={listAllWidgets} />;
    } else {
      return (
        <div className='md:flex md:flex-wrap md:-mr-4'>
          <div className='md:inner md:w-1/2 pb-4 md:pr-4'>
            <div className='p-5 border-1 bg-white rounded-2xl'>
              <h2 className='text-lg font-bold text-gray-400 mb-1.5' />
              <div className='text-center text-gray-400 my-8 font-light'>
                <p className='text-4xl mb-2'>No widgets at all</p>
                <p>
                  Click{' '}
                  <Btn color='none' onClick={handleClickMenu}>
                    HERE
                  </Btn>{' '}
                  to add a new one
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  // const handleCounter = function () {
  //   if (listAllWidgets.length > 0) {
  //     console.log(listAllWidgets);
  //     return <Counter title={addCounter} listAllWidgets={listAllWidgets} />;
  //   }
  // };

  let iconTool = 'inline-block text-xl relative -top-0.5';
  let iconClass = 'mx-auto text-4xl';

  return (
    <>
      <h2 className='text-xl'>Widgets</h2>
      <div className='pt-3'>
        <div className='mb-4'>
          <Btn color='primary' onClick={handleClickMenu}>
            <RiAddCircleLine className={`${iconTool}`} /> Add Widget
          </Btn>{' '}
          <Btn color='danger'>
            <BiBomb className={`${iconTool}`} /> Clear all
          </Btn>
        </div>
        <>{handleTitleJustsay()}</>
        {/* <>{handleCounter()}</> */}

        {modalActiveMenu && (
          <ModalCard onCancel={handleCancel}>
            <TextHead>Add widget</TextHead>
            <div className='flex flex-wrap text-center mt-1.5 -ml-1.5'>
              <WidgetMenuCard title='JustSay' onClick={handleClickJustsay}>
                <AiOutlineMessage className={`${iconClass}`} />
              </WidgetMenuCard>
              <WidgetMenuCard title='Counter' onClick={handleClickCounter}>
                <RiIncreaseDecreaseLine className={`${iconClass}`} />
              </WidgetMenuCard>
              <WidgetMenuCard title='Timer' onClick={handleClickTimer}>
                <IoTimerOutline className={`${iconClass}`} />
              </WidgetMenuCard>
            </div>
          </ModalCard>
        )}
        {modalActiveJustsay && (
          <ModalCard onCancel={handleCancel}>
            <FormJustSay
              setTitleJustsay={setTitleJustsay}
              handleTitleJustsay={handleTitleJustsay}
              handleCancel={handleCancel}
              listAllWidgets={listAllWidgets}
              setListAllWidgets={setListAllWidgets}
              DateTime={DateTime}
            />
          </ModalCard>
        )}
        {modalActiveCounter && (
          <ModalCard onCancel={handleCancel}>
            <FormCounter
              setCouter={setCouter}
              handleCounter={handleCounter}
              handleCancel={handleCancel}
              listAllWidgets={listAllWidgets}
              setListAllWidgets={setListAllWidgets}
              DateTime={DateTime}
            />
          </ModalCard>
        )}
        {modalActiveTimer && (
          <ModalCard onCancel={handleCancel}>Timer</ModalCard>
        )}
      </div>
    </>
  );
}
