using System.ComponentModel.DataAnnotations;

namespace Server.Dto;

public sealed record CreateNewUserEmailRequestDto
{
	[Required] [EmailAddress] public string Email { get; init; } = string.Empty;
}