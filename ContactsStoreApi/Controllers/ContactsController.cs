using ContactsStoreApi.Models;
using ContactsStoreApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactsStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactsController : ControllerBase
{
    private readonly ContactsService _contactsService;

    public ContactsController(ContactsService contactsService) =>
        _contactsService = contactsService;

    [HttpGet]
    public async Task<List<Contact>> Get() =>
        await _contactsService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Contact>> Get(string id)
    {
        var contact = await _contactsService.GetAsync(id);

        if (contact is null)
        {
            return NotFound();
        }

        return contact;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Contact newContact)
    {
        await _contactsService.CreateAsync(newContact);

        return CreatedAtAction(nameof(Get), new { id = newContact.Id }, newContact);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Contact updatedContact)
    {
        var contact = await _contactsService.GetAsync(id);

        if (contact is null)
        {
            return NotFound();
        }

        updatedContact.Id = contact.Id;

        await _contactsService.UpdateAsync(id, updatedContact);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var contact = await _contactsService.GetAsync(id);

        if (contact is null)
        {
            return NotFound();
        }

        await _contactsService.RemoveAsync(id);

        return NoContent();
    }
}