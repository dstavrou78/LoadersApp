using LoadersApp.Server.Interfaces;
using LoadersApp.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoadersApp.Server.Controllers
{
    [ApiController]
    [Route("api/loader")]
    public class LoaderController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IConversionService _conversionService;
        private readonly ILoaderService _service;
        public LoaderController(
            IConfiguration configuration, 
            [FromKeyedServices("FileLoader")] ILoaderService FileLoader,
            [FromKeyedServices("DataLoader")] ILoaderService DataLoader,
            IConversionService conversionService
            )
        {
            _configuration = configuration;
            _conversionService = conversionService;

            string? selectedLoader = configuration.GetValue<string?>("LoaderUsed");

            switch(!String.IsNullOrEmpty(selectedLoader) ? selectedLoader : "")
            {
                case "FileLoader":
                    _service = FileLoader;
                    break;
                case "DataLoader":
                    _service = DataLoader;
                    break;
                default:
                    _service = DataLoader;
                    break;
            }
        }

        [HttpGet("LoadItem/{id}")]
        public IActionResult LoadItem(string id)
        {
            try
            {
                if(String.IsNullOrEmpty(id))
                {
                    return BadRequest("Operation failed. Invalid input data.");
                }

                GenericEntity item = _service.LoadItem(id);

                if (item == null)
                {
                    return NotFound("Search returned no results");
                }

                return Ok(item);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("LoadItems")]
        public IActionResult LoadItems()
        {
            try
            {
                var items = _service.LoadItems();

                return Ok(items);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("InsertItem")]
        public IActionResult InsertItem([FromBody] GenericEntity item)
        {
            try
            {
                if(String.IsNullOrEmpty(item.Id) || String.IsNullOrEmpty(item.Name))
                {
                    return BadRequest("Operation failed. Invalid input data.");
                }

                _service.InsertItem(item);
                return Ok(item);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }      
        }

        [HttpPut("UpdateItem")]
        public IActionResult UpdateItem([FromBody] GenericEntity item)
        {
            try
            {
                if (String.IsNullOrEmpty(item.Id) || String.IsNullOrEmpty(item.Name))
                {
                    return BadRequest("Operation failed. Invalid input data.");
                }

                _service.UpdateItem(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }  
        }

        [HttpDelete("DeleteItem/{id}")]
        public IActionResult DeleteItem(string id)
        {
            try
            {
                if (String.IsNullOrEmpty(id))
                {
                    return BadRequest("Operation failed. Invalid input data.");
                }

                _service.DeleteItem(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
