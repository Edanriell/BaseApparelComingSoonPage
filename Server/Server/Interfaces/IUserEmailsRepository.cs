using Server.Dto;

namespace Server.Interfaces;

public interface IUserEmailsRepository
{
	Task<IResult> GetAllUserEmails();
	Task<IResult> CreateNewUserEmail(CreateNewUserEmailRequestDto request);
} 