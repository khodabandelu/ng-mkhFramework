package org.mkh.framework.service.dto;

import org.mkh.framework.domain.Authority;
import org.mkh.framework.domain.Group;

import javax.validation.constraints.Size;
import java.util.Set;
import java.util.stream.Collectors;

public class GroupDto {

    private Long id;

    @Size(max = 50)
    private String name;

    @Size(max = 50)
    private String code;

    private Set<String> authorities;


    public GroupDto() {
        // Empty constructor needed for Jackson.
    }

    public GroupDto(Group group) {
        this.id = group.getId();
        this.code = group.getCode();
        this.name = group.getName();
        this.authorities = group.getAuthorities().stream()
            .map(Authority::getName)
            .collect(Collectors.toSet());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<String> authorities) {
        this.authorities = authorities;
    }

    @Override
    public String toString() {
        return "GroupDto{" +
            "id='" + id + '\'' +
            ", name='" + name + '\'' +
            ", code='" + code + '\'' +
            ", authorities=" + authorities +
            "}";
    }
}
