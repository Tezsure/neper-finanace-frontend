import { Params as ParamsType } from "../utils/types";

type ParamsProps = ParamsType;

const Params = ({
  mcr,
  borrowRate,
  totalColl,
  totalDebt,
  vaultCount,
}: ParamsProps) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 bg-gradient-to-r from-blue-200 to-blue-400"
      style={{
        width: "45%",
      }}
    >
      <h3 className="text-xl mb-2 font-semibold border-b pb-2">
        Neper statistics
      </h3>
      <div className="mb-6">
        <h4 className="font-bold text-lg mb-3">Protocol</h4>
        <ul>
          <li className="flex justify-between py-1">
            <span>Borrowing Fee</span>
            <span className="font-medium">{borrowRate} %</span>
          </li>
          <li className="flex justify-between py-1">
            <span>Vaults</span>
            <span className="font-medium">{vaultCount}</span>
          </li>
          <li className="flex justify-between py-1">
            <span>pUSD in Stability Pool</span>
            <span className="font-medium">83.3M (57.1%)</span>
          </li>
          <li className="flex justify-between py-1">
            <span>Total Collateral Ratio</span>
            <span className="font-medium">{mcr}%</span>
          </li>
          <li className="flex justify-between py-1">
            <span>Current MCR</span>
            <span className="font-medium">{mcr}</span>
          </li>
          <li className="flex justify-between py-1">
            <span>Total Collateral</span>
            <span className="font-medium">${totalColl}</span>
          </li>
          <li className="flex justify-between py-1">
            <span>Total Debt</span>
            <span className="font-medium">{totalDebt} pUSD</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Params;