using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class change_start_db : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 25, 10, 11, 6, 239, DateTimeKind.Local).AddTicks(5728));

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 2,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 26, 10, 11, 6, 239, DateTimeKind.Local).AddTicks(5731));

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 3,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 27, 10, 11, 6, 239, DateTimeKind.Local).AddTicks(5732));

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 1,
                columns: new[] { "CriadoEm", "Status" },
                values: new object[] { new DateTime(2023, 12, 1, 10, 11, 6, 239, DateTimeKind.Local).AddTicks(5792), "Em andamento" });

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 2,
                columns: new[] { "CriadoEm", "Status" },
                values: new object[] { new DateTime(2023, 11, 27, 10, 11, 6, 239, DateTimeKind.Local).AddTicks(5794), "Em andamento" });

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 3,
                columns: new[] { "CriadoEm", "Status" },
                values: new object[] { new DateTime(2023, 12, 8, 10, 11, 6, 239, DateTimeKind.Local).AddTicks(5795), "Em andamento" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 25, 9, 33, 27, 8, DateTimeKind.Local).AddTicks(1046));

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 2,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 26, 9, 33, 27, 8, DateTimeKind.Local).AddTicks(1052));

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 3,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 27, 9, 33, 27, 8, DateTimeKind.Local).AddTicks(1054));

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 1,
                columns: new[] { "CriadoEm", "Status" },
                values: new object[] { new DateTime(2023, 12, 1, 9, 33, 27, 8, DateTimeKind.Local).AddTicks(1182), null });

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 2,
                columns: new[] { "CriadoEm", "Status" },
                values: new object[] { new DateTime(2023, 11, 27, 9, 33, 27, 8, DateTimeKind.Local).AddTicks(1185), null });

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 3,
                columns: new[] { "CriadoEm", "Status" },
                values: new object[] { new DateTime(2023, 12, 8, 9, 33, 27, 8, DateTimeKind.Local).AddTicks(1187), null });
        }
    }
}
