import { useState } from 'react';
import BtnGo from './BtnGo';
import ModalCard from './Modals/ModalCard';
import WidgetMenuCard from './Widgets/WidgetMenuCard';
// icon
import { RiAddCircleLine, RiIncreaseDecreaseLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoTimerOutline } from 'react-icons/io5';
import { TextHead } from './Modals/TextHead';
import FormInput from './Layouts/FormInput';

import CardNone from '../components/Layouts/CardNone';


export default function WidgetContent() {
  
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustsay, setModalActiveJustsay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveTimer, setModalActiveTimer] = useState(false);

  const handleClickMenu = function () {
    setModalActiveMenu(true);
  };

  const handleClickJustsay = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(true);
  };

  const handleClickCounter = function () {
    setModalActiveMenu(false);
    setModalActiveCounter(true);
  };

  const handleClickTimer = function () {
    setModalActiveMenu(false);
    setModalActiveTimer(true);
  };

  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(false);
    setModalActiveCounter(false);
    modalActiveTimer(false);
    
  };

  let iconTool = 'inline-block text-xl relative -top-0.5';
  let iconClass = 'mx-auto text-4xl';

  return (
    <>
      <h2 className='text-xl'>Widgets</h2>
      <div className='pt-3'>
        <div className='mb-4'>
          <BtnGo color='primary' onClick={handleClickMenu}>
            <RiAddCircleLine className={`${iconTool}`} /> Add Widget
          </BtnGo>{' '}
          <BtnGo color='danger'>
            <BiBomb className={`${iconTool}`} /> Clear all
          </BtnGo>
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
              <FormInput
                title='Add JustSay'
                placeholder='Enter text'
              ></FormInput>
            </ModalCard>
          )}
          {modalActiveCounter && (
            <ModalCard onCancel={handleCancel}>
              <FormInput
                title='Add Counter'
                placeholder='Enter the initial value'
              ></FormInput>
            </ModalCard>
          )}
          {modalActiveTimer && (
            <ModalCard onCancel={handleCancel}>
              <FormInput title='Add Timer' placeholder='00:00'></FormInput>
            </ModalCard>
          )}
        </div>
      </div>
      <CardNone />
    </>
  );
}
