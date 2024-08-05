using System.ComponentModel.DataAnnotations;

namespace Server.Dto;

public sealed record CreateNewUserEmailRequestDto
{
	[Required]
	[EmailAddress]
	[StringLength(120)]
	public string Email { get; init; } = string.Empty;
}