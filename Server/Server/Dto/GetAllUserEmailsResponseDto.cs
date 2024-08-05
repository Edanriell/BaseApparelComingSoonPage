using Server.Entities;

namespace Server.Dto;

public class GetAllUserEmailsResponseDto
{
	public List<UserEmail> Data        { get; set; } = null!;
	public int             RecordCount { get; set; }
}