using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace WebTEST_003.Controllers;

[ApiController]
[Route("[controller]")]

public class UserController : ControllerBase
{
    string connectionString = "Data Source=F:\\Programs\\SQLiteStudio\\DBs\\my_users_db.db";
    
    [HttpGet ("{id:int}")]
    public async Task<IActionResult> GetById([FromRoute]int id)
    {
        var sql = "SELECT id, title, body FROM Users WHERE id = @id_param";

        await using var connection = new SqliteConnection(connectionString);
        await connection.OpenAsync();
        await using var command = new SqliteCommand(sql, connection)
        {
            Parameters =
            {
                new("id_param", id)
            }
        };

        await using var reader = await command.ExecuteReaderAsync();

        if (await reader.ReadAsync())
        {
            return Ok(new User()
            {
                Id = reader.GetInt32(0),
                Title = reader.GetString(1),
                Body = reader.GetString(2),
            });
        }
        else
        {
            return NotFound();
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var sql = "SELECT id, title, body FROM Users";

        await using var connection = new SqliteConnection(connectionString);
        await connection.OpenAsync();
        await using var command = new SqliteCommand(sql, connection);

        await using var reader = await command.ExecuteReaderAsync();

        var res = new List<User>();

        while (await reader.ReadAsync())
        {
            res.Add(new User()
            {
                Id = reader.GetInt32(0),
                Title = reader.GetString(1),
                Body = reader.GetString(2),
            });
        }

        if (res.Count > 0)
        {
            return Ok(res);
        }
        else
        {
            return NotFound();
        }
    }

    public record PostUserReq(string Title, string Body);
    public record PutUserReq(int id, string Title, string Body);

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] PostUserReq req)
    {
        var sql = "INSERT INTO Users (title, body) VALUES (@title_param, @body_param)";

        await using var connection = new SqliteConnection(connectionString);
        await connection.OpenAsync();
        await using var command = new SqliteCommand(sql, connection)
        {
            Parameters =
            {
                new("title_param", req.Title),
                new("body_param", req.Body)
            }
        };

        int count = await command.ExecuteNonQueryAsync();

        //Console.WriteLine($"ФФФФФ: {count}");

        if (count <= 0)
        {
            return BadRequest();
        }
        
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Put([FromBody] PutUserReq req)
    {
        var sql = "UPDATE Users SET id = @id_param, title = @title_param, body = @body_param WHERE id = @id_param";

        await using var connection = new SqliteConnection(connectionString);
        await connection.OpenAsync();
        await using var command = new SqliteCommand(sql, connection)
        {
            Parameters =
            {
                new("id_param", req.id),
                new("title_param", req.Title),
                new("body_param", req.Body)
            }
        };

        int count = await command.ExecuteNonQueryAsync();

        if (count <= 0)
        {
            return BadRequest();
        }

        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteById([FromRoute] int id)
    {
        var sql = "DELETE FROM Users WHERE id = @id_param";

        await using var connection = new SqliteConnection(connectionString);
        await connection.OpenAsync();
        await using var command = new SqliteCommand(sql, connection)
        {
            Parameters =
            {
                new("id_param", id),
            }
        };

        int count = await command.ExecuteNonQueryAsync();

        if (count <= 0)
        {
            return BadRequest();
        }

        return Ok();
    }


}
