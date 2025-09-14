
"use client"
import Status from '@/component/atoms/Status';
import AppTable from '@/component/organism/AppTable/AppTable';
import { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { paymentData, tableHeaderConfig } from './paymentData';
import classes from './PaymentTemplate.module.css';

const PaymentTemplate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  // Use imported data and table header configuration
  const tableHeader = tableHeaderConfig;

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(paymentData.map(item => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id, checked) => {
    if (checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    }
  };

  const handleDownload = (invoiceId) => {
    console.log('Downloading invoice:', invoiceId);
  };

  const renderTableHeader = ({ item, index }) => {
    if (item.key === 'checkbox') {
      return (
        <input
          type="checkbox"
          checked={selectedRows.length === paymentData.length}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
      );
    }
    return item.title;
  };

  const renderItem = ({ item, colIndex, rowIndex, key }) => {
    const rowData = paymentData[rowIndex];
    
    switch (key) {
      case 'checkbox':
        return (
          <input
            type="checkbox"
            checked={selectedRows.includes(rowData.id)}
            onChange={(e) => handleSelectRow(rowData.id, e.target.checked)}
          />
        );
      case 'status':
        return <Status status={item}>{item}</Status>;
      case 'download':
        return (
            <FaFilePdf size={20} color='red' />
        );
      case 'amount':
        return <span className={classes.amount}>{item}</span>;
      default:
        return item;
    }
  };

  return (
    <div className={classes.paymentTemplate}>
     
      
      <div className={classes.tableContainer}>
        <AppTable
          data={paymentData}
          tableHeader={tableHeader}
          renderTableHeader={renderTableHeader}
          renderItem={renderItem}
          hasPagination={true}
          totalRecords={paymentData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          noDataText="No invoices found"
        />
      </div>
    </div>
  );
};

export default PaymentTemplate;
