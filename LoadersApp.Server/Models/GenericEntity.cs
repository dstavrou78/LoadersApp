namespace LoadersApp.Server.Models
{
    public class GenericEntity
    {
        public required string Id { get; set; }
        public required string Name { get; set; }
        public string Address { get; set; } = String.Empty;
    }
}
