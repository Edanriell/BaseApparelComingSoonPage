using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Dto;
using Server.Entities;
using Server.Interfaces;

namespace Server.Repositories;

public class UserEmailsRepository(ApplicationDbContext context) : IUserEmailsRepository
{
	public async Task<IResult> GetAllUserEmails()
	{
		var query = await context.UserEmails.AsNoTracking().ToListAsync();

		var recordCount = query.Count;

		if (recordCount == 0)
			return TypedResults.NotFound("No Access Requests have been found in DB.");

		return TypedResults.Ok(
			new GetAllUserEmailsResponseDto
			{
				Data        = query,
				RecordCount = recordCount
			});
	}

	public async Task<IResult> CreateNewUserEmail(CreateNewUserEmailRequestDto request)
	{
		var isEmailRegistered = await context.UserEmails.FirstOrDefaultAsync(ar => ar.Email == request.Email);

		if (isEmailRegistered is not null)
			return TypedResults.BadRequest("This email is already registered.");

		var entity = new UserEmail
					 {
						 Email = request.Email
					 };

		await context.UserEmails.AddAsync(entity);

		await context.SaveChangesAsync();

		return TypedResults.Ok("New User Email has been created.");
	}
}