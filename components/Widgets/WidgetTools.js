import { useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import BtnGo from '../BtnGo';
import ModalCard from '../Modals/ModalCard';
import WidgetModal from '../Widgets/WidgetModal';

export default function WidgetTools() {
  const [modalActive, setModalActive] = useState(false);
  const handleClick = function () {
    setModalActive(true);
  };
  const handleCancel = function () {
    setModalActive(false);
  };

  let iconTool = 'inline-block text-xl relative -top-0.5';

  return (
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
            <WidgetModal />
          </ModalCard>
        )}
      </div>
    </div>
  );
}
