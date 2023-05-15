import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from './config';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setProducts(data); // Update the products state with retrieved data
    };
    getProducts();
  }, []);

  return (
    <View>
      <Text>
        {products.map(product => (
          <Text key={product.id}>{product.name}</Text>
        ))}
      </Text>
    </View>
  );
};

export default App;
