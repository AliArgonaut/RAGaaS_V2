package infera.backend.ragaas.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.*;

import infera.backend.ragaas.dtos.LoginUserRequestDto;
import infera.backend.ragaas.dtos.LoginUserResponseDto;
import infera.backend.ragaas.services.LoginUserService;

@RestController
@RequestMapping("/v1/api/login")
public class LoginUserController {
    private LoginUserService loginUserService;

    public LoginUserController(LoginUserService loginUserService) {
        this.loginUserService = loginUserService;
    };

    @PostMapping
    public ResponseEntity<LoginUserResponseDto> loginUser(@Valid @RequestBody LoginUserRequestDto loginUserRequestDto) {
        LoginUserResponseDto loginUserResponseDto = loginUserService.loginUser(loginUserRequestDto);
        return ResponseEntity.ok(loginUserResponseDto);
    };

};
