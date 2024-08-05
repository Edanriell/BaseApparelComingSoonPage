using System.ComponentModel.DataAnnotations;
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
			return TypedResults.NotFound("No User Emails have been found.");

		return TypedResults.Ok(
			new GetAllUserEmailsResponseDto
			{
				Data        = query,
				RecordCount = recordCount
			});
	}

	public async Task<IResult> CreateNewUserEmail(CreateNewUserEmailRequestDto request)
	{
		var validationResults = new List<ValidationResult>();
		var validationContext = new ValidationContext(request);

		var isValid = Validator.TryValidateObject(request, validationContext, validationResults, true);

		if (!isValid)
		{
			var errors = validationResults
			   .GroupBy(v => v.MemberNames.FirstOrDefault())
			   .ToDictionary(
						g => g.Key ?? "General",
						g => g.Select(v => v.ErrorMessage).ToArray()
					);

			return TypedResults.BadRequest(new { Errors = errors });
		}

		var isEmailRegistered = await context.UserEmails.FirstOrDefaultAsync(email => email.Email == request.Email);

		if (isEmailRegistered is not null)
			return TypedResults.BadRequest($"Email: {request.Email} is already been registered.");

		var entity = new UserEmail
					 {
						 Email = request.Email
					 };

		await context.UserEmails.AddAsync(entity);

		await context.SaveChangesAsync();

		return TypedResults.Ok($"Email: {request.Email} has been created successfully.");
	}
}