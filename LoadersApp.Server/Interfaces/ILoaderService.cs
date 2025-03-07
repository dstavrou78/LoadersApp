using LoadersApp.Server.Models;

namespace LoadersApp.Server.Interfaces
{
    public interface ILoaderService
    {
        public GenericEntity LoadItem(string id);
        public List<GenericEntity> LoadItems();
        public void InsertItem(GenericEntity item);
        public void UpdateItem(GenericEntity item);
        public void DeleteItem(string id);
    }
}

