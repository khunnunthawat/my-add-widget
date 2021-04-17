import { useState } from 'react';
import { TextHead } from '../Modals/TextHead';
import { AiOutlineMessage } from 'react-icons/ai';
import { RiIncreaseDecreaseLine } from 'react-icons/ri';
import { IoTimerOutline } from 'react-icons/io5';
import ModalCard from '../Modals/ModalCard';
import WidgetMenuCard from './WidgetMenuCard';
import FormInput from '../Layouts/FormInput';

function WidgetModal() {
  let iconClass = 'mx-auto text-4xl';

  const [modalActive, setModalActive] = useState(false);

  const handleClickJustsay = function () {
    setModalActive(true);
  };

  const handleClickCounter = function () {
    setModalActive(true);
  };

  const handleClickTimer = function () {
    setModalActive(true);
  };

  const handleCancel = function () {
    setModalActive(false);
  };

  return (
    <>
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
        {modalActive && (
          <ModalCard onCancel={handleCancel}>
            <FormInput></FormInput>
          </ModalCard>
        )}
      </div>
    </>
  );
}

export default WidgetModal;
