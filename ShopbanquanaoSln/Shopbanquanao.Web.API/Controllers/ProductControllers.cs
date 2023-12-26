using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shopbanquanao.Web.API.Models;
using Shopbanquanao.Web.API.ViewModels;

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
        public IActionResult CreateProduct(ProductCreateViewModel _product)
        {
            Product product = new Product ();
            product.Name = _product.Name;
            product.Id = _product.Id;
            product.Price = _product.Price;
            product.Image = _product.Image;
            product.CategoryId = _product.CategoryId;

            var result = _context.Products.Add(product);
            _context.SaveChanges();
            if (result != null)
            {
                return Ok("Add successfully!");
            }
            return BadRequest("Can't");
        }
        [HttpGet("/ProductById/{id:int}")]
        public IActionResult GetProductById(int id)
        {
            var productFound = _context.Products.FirstOrDefault(p => p.Id == id);
            return Ok(productFound);
        }
        [HttpPost("/UpdateProduct/")]
        public IActionResult UpdateProduct(ProductUpdateViewModel product)
        {
            Product? productUpdate = _context.Products.Find(product.Id);
            productUpdate.Name = product.Name;
            productUpdate.Price = product.Price;
            productUpdate.Image = product.Image;
            productUpdate.CategoryId = product.CategoryId;

            _context.Entry(productUpdate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Ok(productUpdate);
        }
        [HttpDelete("/ProductDelete/{id:int}")]
        public string DeleteProduct(int id)
        {
            string result = "";
            var productFound = _context.Products.Find(id);
            if (productFound != null)
            {
                _context.Entry(productFound).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                _context.SaveChanges();
                result = $"Delete product with id:{id} completed!";
            }
            else
            {
                result = $"The database has no id: {id}!";
            }
            return result;

        }
    }
}
