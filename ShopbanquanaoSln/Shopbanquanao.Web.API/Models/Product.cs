using System;
using System.Collections.Generic;

namespace Shopbanquanao.Web.API.Models;

public partial class Product
{
    public string? Name { get; set; }

    public string? Price { get; set; }

    public int? CategoryId { get; set; }

    public string? Image { get; set; }

    public int Id { get; set; }

    public virtual Category? Category { get; set; }
}
