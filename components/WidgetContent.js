import { useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import BtnGo from './BtnGo';
import ModalCard from './Modals/ModalCard';
import WidgetMenuModal from './Widgets/WidgetMenuModal';
import CardNone from '../components/Layouts/CardNone';

export default function WidgetContent() {
  
  const [modalActive, setModalActive] = useState(false);

  const handleClick = function () {
    setModalActive(true);
  };

  const handleCancel = function () {
    setModalActive(false);
  };

  let iconTool = 'inline-block text-xl relative -top-0.5';

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
          {modalActive && (
            <ModalCard onCancel={handleCancel}>
              <WidgetMenuModal />
            </ModalCard>
          )}
        </div>
      </div>
      <CardNone />
    </>
  );
}
