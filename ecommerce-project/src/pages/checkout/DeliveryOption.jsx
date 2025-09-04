import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";

export const DeliveryOption = ({ cartItem,deliveryOptions }) => {

  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOptions.map((deliveryOption) => {
        let priceSting = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceSting = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              checked
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
              <div className="delivery-option-price">{priceSting}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
