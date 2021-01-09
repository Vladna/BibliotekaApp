using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
namespace WebApplication1.Controllers
{
    public class ClanController : ApiController
    {


        public HttpResponseMessage Get()
        {
            string query = @"
                select ClanId,ClanIme,ClanPrezime,ClanGodinaRodjenja,ClanStatus,
                        ClanDatumUclanjenja,IznajmljenaKnjigaId
                        from dbo.Clan";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["BibliotekaDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Clan cla)
        {
            try
            {
                string query = @"
                    insert into dbo.Clan values (
                    '" + cla.ClanIme + @"'
                    ,'" + cla.ClanPrezime + @"'
                    ,'" + cla.ClanGodinaRodjenja + @"'
                    ,'" + cla.ClanStatus + @"'
                    ,'" + cla.ClanDatumUclanjenja + @"'
                    ,'" + cla.IznajmljenaKnjigaId + @"'
                    
                    )
";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["BibliotekaDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Clan  je dodat uspesno!";
            }
            catch (Exception)
            {

                return "Doslo je do greske! Clan nije  dodat";
            }
        }

        public string Put(Clan cla)
        {
            try
            {
                string query = @"
                   update dbo.Clan set
                   ClanIme='" + cla.ClanIme + @"'
                 , ClanPrezime='" + cla.ClanPrezime + @"'
                 , ClanGodinaRodjenja='" + cla.ClanGodinaRodjenja + @"'
                 , ClanStatus='" + cla.ClanStatus + @"'
                 , ClanDatumUclanjenja='" + cla.ClanDatumUclanjenja + @"'
                 , IznajmljenaKnjigaId='" + cla.IznajmljenaKnjigaId + @"'
                
                  where ClanId='" + cla.ClanId + @"'

                ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["BibliotekaDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Clan je Update-ovan.";
            }
            catch (Exception)
            {

                return "Doslo je do greske! Clan nije update-ovan.";
            }
        }
        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from  dbo.Clan where ClanId=" + id + @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["BibliotekaDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Clan je uspesno izbirsan! ";
            }
            catch (Exception)
            {

                return "Doslo je do greske!Clan nije izbrisan.";
            }
        }
    }
}

