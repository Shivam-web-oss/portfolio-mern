import Portfolio from '../models/Portfolio.js';

// Get portfolio
export const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create or update portfolio
export const createPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne();
    
    if (portfolio) {
      portfolio = await Portfolio.findByIdAndUpdate(portfolio._id, req.body, { new: true });
    } else {
      portfolio = new Portfolio(req.body);
      await portfolio.save();
    }
    
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
