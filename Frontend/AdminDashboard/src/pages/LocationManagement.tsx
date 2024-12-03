import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useApi';
import AdvancedFilterDemo from '../components/Tables/TableOne';
import { Dialog } from 'primereact/dialog';
const LocationManagement: React.FC = () => {
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
      <span className="font-bold white-space-nowrap">Amy Elsner</span>
    </div>
  );

  const footerContent = (
    <div>
      <button className="bg-primary py-2 px-3 text-white rounded-sm" onClick={() => setVisible(false)} autoFocus>OK</button>
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
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
      </div>

      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-2xl ">Location Management</h2>
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

export default LocationManagement;
