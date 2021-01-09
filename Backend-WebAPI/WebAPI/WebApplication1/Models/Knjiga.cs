using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Knjiga
    {
        public int KnjigaId { get; set; }
        public string KnjigaIme { get; set; }
        public string KnjigaAutor { get; set; }
        public bool KnjigaStanje { get; set; }
        public string KnjigaDatumIzdavanja { get; set; }
        public string KnjigaDatumVracanja { get; set; }
        public int KnjiguIznajmio { get; set; }
        public string KnjigaSlikaFajl { get; set; }

    }
}