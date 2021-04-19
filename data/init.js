print('---> CREATING DATABASE <---');

db = db.getSiblingDB('phonebook');

print('---> CREATING COLLECTION <---');

db.createCollection('contact');

print('---> CREATING INDEX <---');

db.contact.createIndex({ name: 1 }, { unique: true })

print('---> SUCCESS TO RUN SCRIPT <---');