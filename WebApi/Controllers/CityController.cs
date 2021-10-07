using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController()
        {
        }

        [HttpGet("")]
        public ActionResult<IEnumerable<string>> GetCity()
        {
            return new List<string> { "Atlanta", "New York", "Vancouver", "Boston" };
        }

        // [HttpGet("{id}")]
        // public ActionResult<TModel> GetTModelById(int id)
        // {
        //     return null;
        // }

        // [HttpPost("")]
        // public ActionResult<TModel> PostTModel(TModel model)
        // {
        //     return null;
        // }

        // [HttpPut("{id}")]
        // public IActionResult PutTModel(int id, TModel model)
        // {
        //     return NoContent();
        // }

        // [HttpDelete("{id}")]
        // public ActionResult<TModel> DeleteTModelById(int id)
        // {
        //     return null;
        // }
    }
}