import axios from 'axios';

export const trackShipment = async (req, res) => {
    try {
        const { trackingNumber, courierPartner } = req.body;
        let trackingInfo;

        // Example for Delhivery
        if (courierPartner === 'Delhivery') {
            const response = await axios.get(`https://api.delhivery.com/v1/packages/json/?waybill=${trackingNumber}`, {
                headers: { 'Authorization': `Bearer ${process.env.DELHIVERY_API_KEY}` }
            });
            trackingInfo = response.data;
        }

        // Add similar logic for other courier partners

        res.status(200).json(trackingInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
