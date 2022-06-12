using ContactsStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ContactsStoreApi.Services;

public class ContactsService
{
    private readonly IMongoCollection<Contact> _contactsCollection;

    public ContactsService(
        IOptions<ContactsStoreDatabaseSettings> contactsStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            contactsStoreDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            contactsStoreDatabaseSettings.Value.DatabaseName);

        _contactsCollection = mongoDatabase.GetCollection<Contact>(
            contactsStoreDatabaseSettings.Value.ContactsCollectionName);
    }

    public async Task<List<Contact>> GetAsync() =>
        await _contactsCollection.Find(_ => true).ToListAsync();

    public async Task<Contact?> GetAsync(string id) =>
        await _contactsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Contact newContact) =>
        await _contactsCollection.InsertOneAsync(newContact);

    public async Task UpdateAsync(string id, Contact updatedContact) =>
        await _contactsCollection.ReplaceOneAsync(x => x.Id == id, updatedContact);

    public async Task RemoveAsync(string id) =>
        await _contactsCollection.DeleteOneAsync(x => x.Id == id);
}