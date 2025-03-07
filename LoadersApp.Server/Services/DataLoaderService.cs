using LoadersApp.Server.Interfaces;
using LoadersApp.Server.Models;
using SqlServerLoader;

namespace LoadersApp.Server.Services
{
    public class DataLoaderService : ILoaderService
    {
        private readonly DataLoader _loader;
        private readonly IConversionService _conversionService;
        public DataLoaderService(IConversionService conversionService)
        {
            _loader = new DataLoader("server", "userid", "password");
            _conversionService = conversionService;
        }

        public void DeleteItem(string id)
        {
            _loader.DeleteTrader(id);
        }

        public void InsertItem(GenericEntity item)
        {
            Trader trader = _conversionService.ConvertToTrader(item);
            _loader.InsertTrader(trader);
        }

        public GenericEntity LoadItem(string id)
        {
            Trader trader = _loader.LoadTrader(id).Result;
            return _conversionService.ConvertToGenericEntity(trader);
        }

        public List<GenericEntity> LoadItems()
        {
            List<Trader> traders = new List<Trader>();
            List<GenericEntity> convertedItems = new List<GenericEntity>();

            traders = _loader.LoadTraders().Result;

            foreach (var trader in traders)
            {
                convertedItems.Add(_conversionService.ConvertToGenericEntity(trader));
            }

            return convertedItems;
        }

        public void UpdateItem(GenericEntity item)
        {
            Trader trader = _conversionService.ConvertToTrader(item);
            _loader.UpdateTrader(trader);
        }
    }
}
