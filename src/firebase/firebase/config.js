// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  type: "service_account",
  project_id: "react-95331",
  private_key_id: "5bd0b1ae64c8b68a6dfba92dac6824a735213a90",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCksrOsM+tFWLLV\nKlesxelZ6im04t9J4RjaC3NEOKH6m0+9Uri/u2qIQ88vNdV+hJeIjBVCFTqel+Lg\nZ5sS6rm3mKia9cGbXtmzWj3DMD4uRcja5ocQy8cVEvWpbXow/wtghiv8u6qgSMhb\nOadPt8S/7A/j8kO3bJYIhLfI41YoDxEtCVyAIS3D9mOs1FEky3YlFs3W1OQoFxlu\n86GDIapOjNCxdbhkGGKGPODBQJk6AHjYF5pClbvXPHgqbxmH36ukowR6AJlUBSDG\n+WUNYFOdprPOoFgaQ3A57/dFGyiSMDD0oX0FbsUDfWPAsmRSb7VEq+EflLS3a3kW\nIxuRUcpzAgMBAAECggEAEg5OA1gnzWZK03LSbNcVB5ipMjMDJBWA73qnjDhMjcMU\nLAnTG6CqLmkyCsId90JbCIsZqNvXSDFs8TQlPJ7YyxzPMznecVr7MUijPRsKCMb5\ncld+luP4SJetBgJCDfgQC74kjrnA8X85M+3EqXPYppUfLYV5pgofWAIQ0f3BDCAO\ntOZ/RuwMMutNbQIeSPeObRB4WefTBOeIHrb+dPbQFOBa9beVnfH0Mu6SFnA7zGtW\nxXaKjj8RzW4KZ+RJfbS4kYsZvNHfKBDwyOBq2OiSqUIgxhEuwi05ED96oi7wczg8\nA4uN3L0vlIkyGmNZC8fImAoAOYycw1rkx50I/A/3ZQKBgQDogniI2uHiVZSwfLT7\nF/sP4/U7fwsAIjNZm94hDP2EfQje/38Qv6UsuSP7mOM9qHfpUjd0YMbBmtihPJSh\nrqvOAxuaTkDIhm+Hl3EDz05Hi+A+SpyuzwAIF1opK71qPb4bcB35Wb8VRmks1Bms\nhLTI1B0CI8QWPo9h7bZK0vtbJwKBgQC1VmGTAKhrIDO8bdI4liDST9OXVGdGGBPH\nTFY7Bl1DEH0jeXg2sr9M1aCKSZQqvLsMYTHRkFi2ORgEfb8mS9GXueZ0j1/gCAt4\nQfPW+OJ3Rq0ne88Wr1s2GtWBRIxCqw0Xt34mOAugNqujwsej0PRyn/wolTReH9fK\ny5ofRp1V1QKBgBOj8cqdsrcLw6Ok5STQwcR13SFJegRo3y2SnRDtp/ypEzbDHlir\n16gPe5qlL4zlzjtHVqfeBOwVyHbWRzfhKWIdoRdHxPEragBqKoHH4TTp++dHJjUe\nB0KntlYD+9wdmxF2RxHpItsJN5kx0XlhPGQ6hrjHjKjUYAhFrEBl0hXBAoGBAKGe\nwsqNfI42HkZkL0iF7ezkfvbSoFUl4oLv868Z5gd+67mxasZ9m+j0Qeje2XMZ0TCg\ndBGOsLKAwnpGRRbx3nV3mAHtQ4teQDLHvXetTdL3KB8XxyQ12Hqpgf97w/Mrlzi7\nL3EK5Lm/4EzNrre/5g8/rjPRf+IgSWmS++PCQTqdAoGANwfZJKeAoufzwx9Hfs+N\n4ATe0RmjeTe59la5Y15Lt9XCA3dCht5ZUpILXyfju7k391jSCq0RaL52E+oNlWTm\nIVKs/Gt+XdSMH69O3zy8UXdhonCNNjE61FX6x2XuQLlxDEetKOl2rOzNXWazqPdb\nzsdZiOIon6fXNGeowU52cwU=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-kvtu7@react-95331.iam.gserviceaccount.com",
  client_id: "116271128731045050657",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kvtu7%40react-95331.iam.gserviceaccount.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth();
// Intialize Firebase Database
const firebaseStorage = getStorage(app);

export { app, auth, firebaseStorage };
