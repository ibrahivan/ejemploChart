import { Injectable } from '@angular/core';
import { collectionData, docData } from '@angular/fire/firestore';
import { Firestore, addDoc, deleteDoc, doc, updateDoc, where } from '@angular/fire/firestore/firebase';
import { collection, query } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private fs: Firestore
  ) { }

  //Devuelve una coleccion entera
  getCollection(coleccion:string){
    const collectionRef=collection(this.fs, coleccion);
    return collectionData(collectionRef,{idField:'id'}) as Observable<any[]>;
  }

  //Devuelve un documento por su Id
  getDocumentById(id:string, coleccion:string){
    const documentRef=doc(this.fs,`${coleccion}/${id}`);
    return docData(documentRef,{idField:'id'}) as Observable<any>;
  }
    //Devuelve el resultado de una consulta simple
    queryCollection(coleccion:string, campo:string, valor:string){
      const coleccionRef=collection(this.fs,coleccion);
      const queryRef=query(coleccionRef, where (campo,"==", valor));
      return collectionData(queryRef,{idField:'id'}) as Observable<any[]>;
    }

    //Crea un nuevo documento
    newDocument(doc:any, coleccion:string){
      const collectionRef=collection(this.fs,coleccion);
      return addDoc(collectionRef, doc);
    }

    //Actualizar un documento
    updateDocument(doc:any,coleccion:string){
      const docRef=doc(this.fs,`${coleccion}/${doc.id}`);
      return updateDoc(docRef,doc);
    }

    //Borrar un documento
    deleteDoc(id:string, coleccion:string){
      const docRef=doc(this.fs,`${coleccion}/${id}`);
      return deleteDoc(docRef);
    }
  }

