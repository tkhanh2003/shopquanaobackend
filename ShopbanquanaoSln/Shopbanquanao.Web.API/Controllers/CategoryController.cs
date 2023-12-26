using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shopbanquanao.Web.API.Models;
using Shopbanquanao.Web.API.ViewModels;

namespace Shopbanquanao.Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly QlbhContext _context;

        public CategoryController(QlbhContext context)
        {
            _context = context;
        }
        [HttpGet("/GetAllCategory")]
        public IEnumerable<Category> GetProducts()
        {
            var getAllCategory =  _context.Categories.ToList();
            return getAllCategory;
        }
        [HttpPost("/AddCategory")]
        public IActionResult CreateCategory(Category category)
        {

            var result = _context.Categories.Add(category);
            _context.SaveChanges();
            if (result != null)
            {
                return Ok("Add successfully!");
            }
            return BadRequest("Can't");
        }
        [HttpGet("/CategoryById/{id:int}")]
        public IActionResult GetProductById(int id)
        {
            var categoryFound = _context.Categories.FirstOrDefault(p => p.Id == id);
            return Ok(categoryFound);
        }
        [HttpPost("/UpdateCategory/")]
        public IActionResult UpdateCategory(Category category)
        {
            Category? CategoryUpdate = _context.Categories.Find(category.Id);
            CategoryUpdate.Name = category.Name;

            _context.Entry(CategoryUpdate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Ok(CategoryUpdate);
        }
        [HttpDelete("/CategoryDelete/{id:int}")]
        public string DeleteCategory(int id)
        {
            string result = "";
            var categoryFound = _context.Categories.Find(id);
            if (categoryFound != null)
            {
                _context.Entry(categoryFound).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                _context.SaveChanges();
                result = $"Delete Category with id:{id} completed!";
            }
            else
            {
                result = $"The database has no id: {id}!";
            }
            return result;

        }
    }
}
