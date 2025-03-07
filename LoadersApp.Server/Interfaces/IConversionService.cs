using FileLoader;
using LoadersApp.Server.Models;
using SqlServerLoader;

namespace LoadersApp.Server.Interfaces
{
    public interface IConversionService
    {
        public GenericEntity ConvertToGenericEntity(Trader trader);
        public GenericEntity ConvertToGenericEntity(Supplier supplier);
        public Trader ConvertToTrader(GenericEntity genEntity);
        public Supplier ConvertToSupplier(GenericEntity genEntity);
    }
}
