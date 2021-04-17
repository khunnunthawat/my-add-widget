import { useState } from 'react';
import { RiAddCircleLine, RiIncreaseDecreaseLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import BtnGo from './BtnGo';
import ModalCard from './Modals/ModalCard';
import CardNone from '../components/Layouts/CardNone';
import { TextHead } from './Modals/TextHead';
import WidgetMenuCard from './Widgets/WidgetMenuCard';
import FormInput from './Layouts/FormInput';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoTimerOutline } from 'react-icons/io5';

export default function WidgetContent() {
  
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustsay, setModalActiveJustsay] = useState(false);

  const handleClick = function () {
    setModalActiveMenu(true);
    // setModalActive(false);
  };

  const handleClickJustsay = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(true);
    // setModalActive(false);
  };

  const handleCancel = function () {
    setModalActiveJustsay(false);
    setModalActiveMenu(false);
  };

  let iconTool = 'inline-block text-xl relative -top-0.5';
  let iconClass = 'mx-auto text-4xl';

  return (
    <>
      <h2 className='text-xl'>Widgets</h2>
      <div className='pt-3'>
        <div className='mb-4'>
          <BtnGo color='primary' onClick={handleClick}>
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
                <WidgetMenuCard title='Counter'>
                  <RiIncreaseDecreaseLine className={`${iconClass}`} />
                </WidgetMenuCard>
                <WidgetMenuCard title='Timer'>
                  <IoTimerOutline className={`${iconClass}`} />
                </WidgetMenuCard>
              </div>
            </ModalCard>
          )}
          {modalActiveJustsay && (
            <ModalCard onCancel={handleCancel}>
              <FormInput />
            </ModalCard>
          )}
        </div>
      </div>
      <CardNone />
    </>
  );
}
