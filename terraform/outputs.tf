output "ec2_public_ip" {
  value = aws_instance.react_server.public_ip
}

output "ecr_url" {
  value = aws_ecr_repository.react_app.repository_url
}

