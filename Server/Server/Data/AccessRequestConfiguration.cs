using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Entities;

namespace Server.Data;

public class AccessRequestConfiguration : IEntityTypeConfiguration<UserEmail>
{
	public void Configure(EntityTypeBuilder<UserEmail> builder)
	{
		builder.ToTable("UserEmails");
		builder.HasKey(a => a.Id);
		builder.Property(a => a.Id)
		   .HasColumnName(nameof(UserEmail.Id))
		   .HasColumnType("uuid")
		   .HasDefaultValueSql("uuid_generate_v4()");
		builder.Property(a => a.Email)
		   .HasColumnName(nameof(UserEmail.Email))
		   .HasColumnType("varchar")
		   .HasMaxLength(150)
		   .IsRequired();
	}
}