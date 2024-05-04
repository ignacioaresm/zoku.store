import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!product)
    return <div className="container loading-estilo">Loading...</div>;

  return <ItemDetail product={product} />;
};
