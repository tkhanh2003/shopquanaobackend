using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shopbanquanao.Web.API.Models;

namespace Shopbanquanao.Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductControllers : ControllerBase
    {
        private readonly QlbhContext _context;

        public ProductControllers(QlbhContext context)
        {
            _context = context;
        }
        [HttpGet("/GetAllProducts")]
        public async Task<IActionResult> GetProducts()
        {
            var getAllProducts = await _context.Products.ToListAsync();
            return Ok(getAllProducts);
        }
        [HttpPost("/AddProducts")]
        public IActionResult CreateProduct(Product product)
        {
            var result = _context.Products.Add(product);
            _context.SaveChanges();
            if (result != null)
            {
                return Ok("Add successfully!");
            }
            return BadRequest("Can't");
        }
    }
}
