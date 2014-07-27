<?php
	$to      = 'mfleming7024@gmail.com';
	$subject = 'test subject';
	$message = 'HEYYYYYYY';
	$headers = 'From: me@example.com' . "\r\n" .
		'Reply-To: me@example.com' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
?> 