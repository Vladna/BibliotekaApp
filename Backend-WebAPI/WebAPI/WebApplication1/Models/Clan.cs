using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Clan
    {

        public int ClanId { get; set; }
        public string ClanIme{ get; set; }
        public string ClanPrezime { get; set; }
        public string ClanGodinaRodjenja { get; set; }
        public string ClanStatus { get; set; }
        public string ClanDatumUclanjenja { get; set; }
        public int IznajmljenaKnjigaId { get; set; }

    }
}