using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;

namespace API.Controllers;

[Route("api/tarefa")]
[ApiController]
public class TarefaController : ControllerBase
{
    private readonly AppDataContext _context;

    public TarefaController(AppDataContext context) =>
        _context = context;

    // GET: api/tarefa/listar
    [HttpGet]
    [Route("listar")]
    public IActionResult Listar()
    {
        try
        {
            List<Tarefa> tarefas = _context.Tarefas.Include(x => x.Categoria).ToList();
            return Ok(tarefas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // POST: api/tarefa/cadastrar
    [HttpPost]
    [Route("cadastrar")]
    public IActionResult Cadastrar([FromBody] Tarefa tarefa)
    {
        try
        {
            Categoria? categoria = _context.Categorias.Find(tarefa.CategoriaId);
            if (categoria == null)
            {
                return NotFound();
            }
            tarefa.Categoria = categoria;

            if (tarefa.Status == null) {
                tarefa.Status = "Em andamento";
            }
            
            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return Created("", tarefa);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // POST: api/tarefa/alterar/{tarefaId}
    [HttpPatch]
    [Route("alterar/{tarefaId}")]
    public IActionResult Alterar([FromRoute] int tarefaId)
    {
        try
        {
            // Categoria? categoria = _context.Categorias.Find(tarefa.CategoriaId);
            // if (categoria == null)
            // {
            //     return NotFound();
            // }
            // tarefa.Categoria = categoria;
            // _context.Tarefas.Add(tarefa);
            // _context.SaveChanges();
            // return Created("", tarefa);

            Tarefa? tarefa = _context.Tarefas.FirstOrDefault(t => t.TarefaId == tarefaId);

             if (tarefa == null ) {
                return NotFound();
            }

            if (tarefa.Status == null) {
                tarefa.Status = "Em andamento";
            }

            if (tarefa.Status == "Em andamento") {
                tarefa.Status = "Concluída";
            } else {
                tarefa.Status = "Em andamento";
            }

             _context.SaveChanges();
            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // GET: api/tarefa/naoconcluidas
    [HttpGet]
    [Route("listar/naoconcluidas")]
    public IActionResult ListarNaoConcluidas()
    {
        try
        {
            List<Tarefa> tarefasNaoConcluidas = _context.Tarefas
                .Include(x => x.Categoria)
                .Where(t => t.Status.Equals("Em andamento"))
                .ToList();

            return Ok(tarefasNaoConcluidas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // GET: api/tarefa/concluidas
    [HttpGet]
    [Route("listar/concluidas")]
    public IActionResult ListarConcluidas()
    {
        try
        {
            List<Tarefa> tarefasConcluidas = _context.Tarefas
                .Include(x => x.Categoria)
                .Where(t => t.Status.Equals("Concluída"))
                .ToList();

            return Ok(tarefasConcluidas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
