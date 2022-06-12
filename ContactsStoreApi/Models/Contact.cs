using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ContactsStoreApi.Models;

public class Contact
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Username")]
    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Telefono { get; set; } = null!;
}