import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useApi';
import AdvancedFilterDemo from '../components/Tables/TableOne';
import { Dialog } from 'primereact/dialog';
import VillaForm from './RegistrationForms/VillaForm';
import TrekkingForm from './RegistrationForms/TrekkingForm';

const TrekManagement = () => {
  const [visible, setVisible] = useState(false);

  type Villa = {
    villaName: string;
    villaLocation: string;
    villaType: string;
  };

  const { data, loading, error, fetchData } = useFetch<Villa[]>('/villas');

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <span className="font-bold white-space-nowrap">Add Trek</span>
    </div>
  );

  const footerContent = (
    <div>
      {/* <button className="bg-primary py-2 px-3 text-white rounded-sm" onClick={() => setVisible(false)} autoFocus>OK</button> */}
    </div>
  );

  return (
    <div>
      <div className="card flex justify-content-center">
        <Dialog
          visible={visible}
          modal
          header={headerElement}
          footer={footerContent}
          style={{ width: '50rem' }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <TrekkingForm/>
        </Dialog>
      </div>

      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-2xl ">Trek Management</h2>
        <div>
          <button
            className="bg-primary text-white px-3 py-1 rounded rounded-sm mr-1"
            onClick={() => setVisible(true)}
          >
            Add
          </button>
          <button className="bg-danger text-white px-3 py-1 rounded rounded-sm mr-1">
            Remove
          </button>
        </div>
      </div>

      <AdvancedFilterDemo />
    </div>
  );
};

export default TrekManagement;
