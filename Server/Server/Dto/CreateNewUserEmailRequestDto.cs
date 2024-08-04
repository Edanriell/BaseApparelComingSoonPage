using System.ComponentModel.DataAnnotations;

namespace Server.Dto;

public sealed record CreateNewUserEmailRequestDto
{
	[Required]
	[EmailAddress]
	[MinLength(5)]
	[MaxLength(150)]
	public string Email { get; init; } = string.Empty;
}