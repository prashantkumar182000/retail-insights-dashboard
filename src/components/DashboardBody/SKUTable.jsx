import React from 'react';
import '../../styles/sku-table.css';
import UpArrow from '../../assets/icons/body/up-arrow.png';
import DownArrow from '../../assets/icons/body/down-arrow.png';
import RightArrow from '../../assets/icons/body/Drop-down.png';
import SKUIcon from '../../assets/icons/Navbar/Graph.png';

const SKUData = [
  {
    skuName: 'Protein Bar 100g',
    sales: '₹93,132.12',
    outOfStock: '1.68%',
    totalInventory: '931.9',
    averageRank: '3.2',
    estTraffic: '12,303',
    estImpressions: '25,005',
    cl: '1.5',
    isChecked: true,

  },
  {
    skuName: 'Choco Bar 100g',
    sales: '₹8,526.32',
    outOfStock: '6.79%',
    totalInventory: '679',
    averageRank: '7',
    estTraffic: '3005',
    estImpressions: '4231',
    cl: '4',
    isChecked: true,
    salesChange: { value: '2.4%', direction: 'up' },
    stockChange: { value: '2.4%', direction: 'up' },
    rankChange: { value: '2.4%', direction: 'up' },
    trafficChange: { value: '2.4%', direction: 'up' },
    impressionsChange: { value: '2.4%', direction: 'up' },
  },
  {
    skuName: 'SKU 3',
    sales: '₹9,313',
    outOfStock: '1.68%',
    totalInventory: '931.9',
    averageRank: '11',
    estTraffic: '1,931.9',
    estImpressions: '₹931.9',
    cl: '1.5',
    isChecked: false,

  },
  {
    skuName: 'SKU 4',
    sales: '₹0',
    outOfStock: '0%',
    totalInventory: '0',
    averageRank: '0',
    estTraffic: '0',
    estImpressions: '₹0',
    cl: '0',
    isChecked: false,

  },
];

const SKUTable = () => {
  return (
    <div className="sku-table-container">
      {/* Header */}
      <div className="table-header">
        <div>
          <h2>SKU Level Data</h2>
          <p>Analytics for all your SKUs</p>
        </div>
        <button className="filter-button">
          Filters(1)
          <img src={RightArrow} alt=">" className="filter-arrow" />
        </button>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="sku-table">
          <thead>
            {/* Main Headers */}
            <tr className="main-header">
  <th colSpan={1}>
    <div className="sku-header-content">
      <img src={SKUIcon} alt="SKU Icon" className="sku-header-icon" />
      SKU Name
    </div>
  </th>
  <th colSpan={3}>Availability</th>
  <th colSpan={4}>Visibility</th>
</tr>

            {/* Sub-Headers */}
            <tr className="sub-header">
              <th></th>
              <th>Sales</th>
              <th>Out of Stock</th>
              <th>Total Inventory</th>
              <th>Average Rank</th>
              <th>Est. Traffic</th>
              <th>Est. Impressions</th>
              <th>Cl</th>
            </tr>
          </thead>

          <tbody>
            {SKUData.map((row, index) => (
              <tr key={index} className={`data-row ${row.isChecked ? 'checked' : ''}`}>
                <td className="sku-name-cell">
                  <input
                    type="checkbox"
                    checked={row.isChecked}
                    onChange={() => {}}
                    className="custom-checkbox"
                  />
                  <span className="sku-name">{row.skuName}</span>
                </td>
                <td>
                  <div className="data-cell">
                    <div className="main-value">{row.sales}</div>
                    {row.salesChange && (
                      <div className={`change ${row.salesChange.direction}`}>
                        <img 
                          src={row.salesChange.direction === 'up' ? UpArrow : DownArrow} 
                          alt={row.salesChange.direction} 
                        />
                        {row.salesChange.value}
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <div className="data-cell">
                    <span>{row.outOfStock}</span>
                    {row.stockChange && (
                      <span className={`change ${row.stockChange.direction}`}>
                        <img 
                          src={row.stockChange.direction === 'up' ? UpArrow : DownArrow} 
                          alt={row.stockChange.direction} 
                        />
                        {row.stockChange.value}
                      </span>
                    )}
                  </div>
                </td>
                <td>{row.totalInventory}</td>
                <td>
                  <div className="data-cell">
                    <span>{row.averageRank}</span>
                    {row.rankChange && (
                      <span className={`change ${row.rankChange.direction}`}>
                        <img 
                          src={row.rankChange.direction === 'up' ? UpArrow : DownArrow} 
                          alt={row.rankChange.direction} 
                        />
                        {row.rankChange.value}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <div className="data-cell">
                    <span>{row.estTraffic}</span>
                    {row.trafficChange && (
                      <span className={`change ${row.trafficChange.direction}`}>
                        <img 
                          src={row.trafficChange.direction === 'up' ? UpArrow : DownArrow} 
                          alt={row.trafficChange.direction} 
                        />
                        {row.trafficChange.value}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <div className="data-cell">
                    <span>{row.estImpressions}</span>
                    {row.impressionsChange && (
                      <span className={`change ${row.impressionsChange.direction}`}>
                        <img 
                          src={row.impressionsChange.direction === 'up' ? UpArrow : DownArrow} 
                          alt={row.impressionsChange.direction} 
                        />
                        {row.impressionsChange.value}
                      </span>
                    )}
                  </div>
                </td>
                <td>{row.cl}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td>Total</td>
              <td>₹2,93,132.12</td>
              <td>16%</td>
              <td>2,931</td>
              <td>8.3</td>
              <td>61,985</td>
              <td>2,61,768</td>
              <td>1.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SKUTable;