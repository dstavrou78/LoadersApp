using FileLoader;
using LoadersApp.Server.Interfaces;
using LoadersApp.Server.Models;
using SqlServerLoader;

namespace LoadersApp.Server.Services
{
    public class ConversionService : IConversionService
    {
        public Models.GenericEntity ConvertToGenericEntity(Trader trader)
        {
            var genEntity = new Models.GenericEntity()
            {
                Id = trader.Code,
                Name = trader.Description,
                Address = trader.Street
            };

            return genEntity;
        }

        public Models.GenericEntity ConvertToGenericEntity(Supplier supplier)
        {
            var genEntity = new GenericEntity()
            {
                Id = supplier.Id,
                Name = supplier.Name,
                Address = supplier.Address
            };

            return genEntity;
        }

        public Supplier ConvertToSupplier(GenericEntity genEntity)
        {
            Supplier supplier = new Supplier()
            {
                Id = genEntity.Id,
                Name = genEntity.Name,
                Address = genEntity.Address
            };

            return supplier;
        }

        public Trader ConvertToTrader(GenericEntity genEntity)
        {
            Trader trader = new Trader()
            {
                Code = genEntity.Id,
                Description = genEntity.Name,
                Street = genEntity.Address
            };

            return trader;
        }
    }
}
