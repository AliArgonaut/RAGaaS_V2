package infera.backend.ragaas.dtos;

public record LoginUserResponseDto(
        String token,
        String username,
        String tokenType,
        Long expiresIn, // milliseconds
        String email) {
}
