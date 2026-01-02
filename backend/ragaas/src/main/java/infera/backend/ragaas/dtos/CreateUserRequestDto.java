package infera.backend.ragaas.dtos;

public record CreateUserRequestDto(
        String username,
        String email,
        String password) {
}
