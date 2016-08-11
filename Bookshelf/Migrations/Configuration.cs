namespace Bookshelf.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Bookshelf.Models.BookDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Bookshelf.Models.BookDb context)
        {
            context.Books.AddOrUpdate(b => b.ISBN,
                new Book
                {
                    ISBN = "9781430225294",
                    Title = "Pro ASP.NET 4 in C# 2010",
                    Author = "MacDonald, Szpusta, Freeman",
                    Copies = 1,
                    PublishYear = 2010
                },
                new Book
                {
                    ISBN = "9781118833032",
                    Title = "Professional C# 5.0 and .NET 4.5.1",
                    Author = "Christian Nagel, Jay Glynn, Morgan Skinner",
                    Copies = 1,
                    PublishYear = 2014
                },
                new Book
                {
                    ISBN = "9781118311806",
                    Title = "Beginning ASP.NET in C#",
                    Author = "Imar Spaanjaars",
                    Copies = 1,
                    PublishYear = 2012
                },
                new Book
                {
                    ISBN = "9780804141239",
                    Title = "Triggers",
                    Author = "Marshall Goldsmith",
                    Copies = 1,
                    PublishYear = 2015
                },
                new Book
                {
                    ISBN = "9780982866917",
                    Title = "The Elements of Scrum",
                    Author = "Sims & Johnson",
                    Copies = 10,
                    PublishYear = 2011
                }
                );
        }
    }
}

