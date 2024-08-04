namespace Server.Entities;

public class UserEmail
{
	public Guid   Id    { get; init; }
	public string Email { get; init; } = string.Empty;
}