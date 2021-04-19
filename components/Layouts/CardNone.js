import { useState } from 'react';
import BtnGo from '../BtnGo';
import ModalCard from '../Modals/ModalCard';
import WidgetModal from '../Widgets/WidgetMenuModal';

function CardNone() {
  const [modalActive, setModalActive] = useState(false);
  const handleClick = function () {
    setModalActive(true);
  };
  const handleCancel = function () {
    setModalActive(false);
  };

  return (
    <div className='md:flex md:flex-wrap md:-mr-4'>
      <div className='md:inner md:w-1/2 pb-4 md:pr-4'>
        <div className='p-5 border-1 bg-white rounded-2xl'>
          <h2 className='text-lg font-bold text-gray-400 mb-1.5' />
          <div className='text-center text-gray-400 my-8 font-light'>
            <p className='text-4xl mb-2'>No widgets at all</p>
            <p>
              Click{' '}
              <BtnGo color='none' onClick={handleClick}>
                HERE
              </BtnGo>{' '}
              to add a new one
            </p>
          </div>
        </div>
        {modalActive && (
          <ModalCard onCancel={handleCancel}>
            <WidgetModal />
          </ModalCard>
        )}
      </div>
    </div>
  );
}

export default CardNone;
