using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DatatablePlugin.Models
{
    public class Context : DbContext
    {
        public Context() : base("StringDBContext")
        {
        }
        public DbSet<DemoTable> DemoTables { get; set; }
    }
}