using Microsoft.AspNetCore.Mvc;
using Server.Dto;
using Server.Interfaces;
using Server.Routing;

namespace Server.Endpoints;

public class AccessRequestsEndpoints
{
	public class AccessRequests : IEndpointRouteHandler
	{
		public void MapEndpoints(IEndpointRouteBuilder app)
		{
			app.MapGet("/api/user-emails", GetAllUserEmails);
			app.MapPost("/api/user-emails/new", CreateNewUserEmail);
		}

		private async Task<IResult> GetAllUserEmails(IUserEmailsRepository userEmailsRepository)
		{
			return await userEmailsRepository.GetAllUserEmails();
		}
 
		private async Task<IResult> CreateNewUserEmail([FromBody] CreateNewUserEmailRequestDto request,
													   IUserEmailsRepository                   userEmailsRepository)
		{
			return await userEmailsRepository.CreateNewUserEmail(request);
		}
	}
}