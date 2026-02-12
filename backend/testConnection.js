import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    console.log('🔍 Testing MongoDB Connection...\n');
    console.log(`📍 Connection URI: ${process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'}`);
    
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
      serverSelectionTimeoutMS: 5000
    });
    
    console.log('\n✅ MongoDB Connection Successful!');
    console.log('📊 Database Status:');
    console.log(`   Database: ${mongoose.connection.name}`);
    console.log(`   Host: ${mongoose.connection.host}`);
    console.log(`   Port: ${mongoose.connection.port}`);
    
    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`\n📦 Collections (${collections.length}):`);
    collections.forEach(collection => {
      console.log(`   - ${collection.name}`);
    });

    await mongoose.connection.close();
    console.log('\n✅ Test completed successfully!');
  } catch (error) {
    console.error('\n❌ MongoDB Connection Failed!');
    console.error(`Error: ${error.message}`);
    console.error('\n💡 Troubleshooting Tips:');
    console.error('1. Make sure MongoDB is running (mongod command)');
    console.error('2. Check your connection string in .env file');
    console.error('3. If using MongoDB Atlas, whitelist your IP');
    console.error('4. Verify network connectivity to MongoDB server');
    process.exit(1);
  }
};

testConnection();
