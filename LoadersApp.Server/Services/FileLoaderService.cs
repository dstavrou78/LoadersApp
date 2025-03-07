using FileLoader;
using LoadersApp.Server.Interfaces;
using LoadersApp.Server.Models;

namespace LoadersApp.Server.Services
{
    public class FileLoaderService : ILoaderService
    {
        private readonly Loader _loader;
        private readonly IConversionService _conversionService;
        public FileLoaderService(IConversionService conversionService)
        {
            _loader = new Loader("suppliers.txt");
            _conversionService = conversionService;
        }

        public void DeleteItem(string id)
        {
            _loader.DeleteSupplier(id);
        }

        public void InsertItem(GenericEntity item)
        {
            Supplier supplier = _conversionService.ConvertToSupplier(item);
            _loader.InsertSupplier(supplier);
        }

        public GenericEntity LoadItem(string id)
        {
            Supplier supplier = _loader.LoadSupplier(id);
            return _conversionService.ConvertToGenericEntity(supplier);
        }

        public List<GenericEntity> LoadItems()
        {
            List<Supplier> suppliers = new List<Supplier>();
            List<GenericEntity> convertedItems = new List<GenericEntity>();

            suppliers = _loader.LoadSuppliers().ToList();

            foreach (var supplier in suppliers)
            {
                convertedItems.Add(_conversionService.ConvertToGenericEntity(supplier));
            }

            return convertedItems;
        }

        public void UpdateItem(GenericEntity item)
        {
            Supplier supplier = _conversionService.ConvertToSupplier(item);
            _loader.UpdateSupplier(supplier);
        }
    }
}
