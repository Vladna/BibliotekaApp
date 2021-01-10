using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class KnjigaController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                select KnjigaId,KnjigaIme,KnjigaAutor,KnjigaStanje,KnjigaDatumIzdavanja,
                        KnjigaDatumVracanja,KnjiguIznajmio,KnjigaSlikaFajl
                        from dbo.Knjiga";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["BibliotekaDB"].ConnectionString)) 
            using(var cmd = new SqlCommand(query,con))
                using(var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Knjiga knj)
        {
            try
            {
                string query = @"
                    insert into dbo.Knjiga values (
                    '" + knj.KnjigaIme + @"'
                    ,'" + knj.KnjigaAutor + @"'
                    ,'" + knj.KnjigaStanje + @"'
                    ,'" + knj.KnjigaDatumIzdavanja + @"'
                    ,'" + knj.KnjigaDatumVracanja + @"'
                    ,'" + knj.KnjiguIznajmio + @"'
                    ,'" + knj.KnjigaSlikaFajl + @"'
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
                return "Knjiga je dodata uspesno!";
            }
            catch (Exception)
            {

                return "Doslo je do greske! Knjiga nije  dodata";
            }
        }

        public string Put(Knjiga knj)
        {
            try
            {
                string query = @"
                   update dbo.Knjiga set
                   KnjigaIme='" + knj.KnjigaIme + @"'
                 , KnjigaAutor='" + knj.KnjigaAutor + @"'
                 , KnjigaStanje='" + knj.KnjigaStanje + @"'
                 , KnjigaDatumIzdavanja='" + knj.KnjigaDatumIzdavanja + @"'
                 , KnjigaDatumVracanja='" + knj.KnjigaDatumVracanja + @"'
                 , KnjiguIznajmio='" + knj.KnjiguIznajmio + @"'
                 , KnjigaSlikaFajl='" + knj.KnjigaSlikaFajl + @"'
                  where KnjigaId='" + knj.KnjigaId + @"'

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
                return "Knjiga je Update-ovana.";
            }
            catch (Exception)
            {

                return "Doslo je do greske! Knjiga nije update-ovana.";
            }
        }
        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from  dbo.Knjiga where KnjigaId=" + id + @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["BibliotekaDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Knjiga je uspesno izbirsana! ";
            }
            catch (Exception)
            {

                return "Doslo je do greske!Knjiga nije izbrisana.";
            }
        }
        [Route("api/Knjiga/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + filename);
                postedFile.SaveAs(physicalPath);
                return filename;
            }
            catch (Exception)
            {

                return "Greska ! Slika nepoznata";
            }
        }
        [Route("api/Knjiga/NaStanju")]
        [HttpGet]
        public HttpResponseMessage GetAllSlobodneKnjige()
        {
            string query = @"
                select KnjigaId,KnjigaIme,KnjigaAutor,KnjigaStanje,KnjigaDatumIzdavanja,
                        KnjigaDatumVracanja,KnjiguIznajmio,KnjigaSlikaFajl
                        from dbo.Knjiga where KnjigaStanje=1";
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
    }
}
