using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Bookshelf.Models
{
    public class BookDb : DbContext
    {
        public DbSet<Book> Books { get; set; }
    }
}