using Microsoft.AspNetCore.Mvc;
using repository;
using repository.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController:ControllerBase
    {
        public readonly MongoRepository repository;
        public CountryController(MongoRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public IActionResult GetCountries()
        {
            try
            {
                return Ok(repository.CountryService.GetCountries());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public ActionResult<CountryModel> UpdateCountry(CountryModel country,string countryId)
        {
            try
            {
                repository.CountryService.UpdateCountry(country,countryId);
                return Ok(country);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
