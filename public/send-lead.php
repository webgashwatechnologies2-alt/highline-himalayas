<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    echo json_encode(['success' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload']);
    exit;
}

$formType       = isset($data['formType'])        ? trim((string)$data['formType'])       : 'Website Enquiry';
$name           = isset($data['name'])            ? trim((string)$data['name'])           : '';
$phone          = isset($data['phone'])           ? trim((string)$data['phone'])          : '';
$email          = isset($data['email'])           ? trim((string)$data['email'])          : '';
$destination    = isset($data['destination'])     ? trim((string)$data['destination'])    : '';
$packageName    = isset($data['packageName'])     ? trim((string)$data['packageName'])    : '';
$packageRoute   = isset($data['packageRoute'])    ? trim((string)$data['packageRoute'])   : '';
$packagePrice   = isset($data['packagePrice'])    ? trim((string)$data['packagePrice'])   : '';
$departureCity  = isset($data['departureCity'])   ? trim((string)$data['departureCity'])  : '';
$travelDate     = isset($data['travelDate'])      ? trim((string)$data['travelDate'])     : '';
$travelMonth    = isset($data['travelMonth'])     ? trim((string)$data['travelMonth'])    : '';
$travelers      = isset($data['travelers'])       ? trim((string)$data['travelers'])      : '';
$travelType     = isset($data['travelType'])      ? trim((string)$data['travelType'])     : '';
$hotelCategory  = isset($data['hotelCategory'])   ? trim((string)$data['hotelCategory'])  : '';
$message        = isset($data['message'])         ? trim((string)$data['message'])        : '';
$whatsappUpdates = isset($data['whatsappUpdates']) ? $data['whatsappUpdates']             : null;

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and phone number are required.']);
    exit;
}

$rows = [];
$rows[] = ['Lead Source / Form',              $formType];
$rows[] = ['Customer Name',                   $name];
$rows[] = ['Phone / WhatsApp',                $phone];
if ($email)          $rows[] = ['Email Address',                   $email];
if ($destination)    $rows[] = ['Destination',                     $destination];
if ($packageName)    $rows[] = ['Package Name',                    $packageName];
if ($packageRoute)   $rows[] = ['Package Route',                   $packageRoute];
if ($packagePrice)   $rows[] = ['Package Price',                   $packagePrice];
if ($departureCity)  $rows[] = ['Departure City',                  $departureCity];
if ($travelDate)     $rows[] = ['Travel Dates',                    $travelDate];
if ($travelMonth)    $rows[] = ['Travel Month / Timeline',         $travelMonth];
if ($travelers)      $rows[] = ['Travelers',                       $travelers];
if ($travelType)     $rows[] = ['Trip Type',                       $travelType];
if ($hotelCategory)  $rows[] = ['Hotel / Stay Category',          $hotelCategory];
if ($whatsappUpdates !== null)
    $rows[] = ['WhatsApp PDF Updates', $whatsappUpdates ? 'Yes' : 'No'];
if ($message)        $rows[] = ['Customer Message / Notes',        $message];

$textBody = "HIGHLINE HIMALAYAS - NEW WEBSITE LEAD\r\n";
$textBody .= "==================================================\r\n\r\n";
foreach ($rows as $r) {
    $textBody .= sprintf("%-28s : %s\r\n", $r[0], $r[1]);
}
$textBody .= "\r\n==================================================\r\n";
$textBody .= "Action: Call or WhatsApp customer promptly.\r\n";
$textBody .= "Source: https://highlinehimalayas.com\r\n";
$textBody .= "Generated: " . gmdate('Y-m-d H:i:s') . " UTC\r\n";

function esc($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }

$tableRows = '';
foreach ($rows as $i => $row) {
    $bg = ($i % 2 === 0) ? '#f8fafc' : '#ffffff';
    $tableRows .=
        '<tr style="background-color:' . $bg . ';">' .
        '<td style="padding:10px 14px;font-weight:bold;color:#334155;width:35%;border-bottom:1px solid #e2e8f0;font-size:13px;">' . esc($row[0]) . '</td>' .
        '<td style="padding:10px 14px;color:#0f172a;border-bottom:1px solid #e2e8f0;font-size:13px;">' . esc($row[1]) . '</td>' .
        '</tr>';
}

$waPhone = preg_replace('/[^\d]/', '', $phone);
if (strlen($waPhone) === 10) {
    $waPhone = '91' . $waPhone;
}

$actionButtons = '<div style="margin-top:20px;display:flex;gap:12px;justify-content:center;">';
if (!empty($waPhone)) {
    $actionButtons .= '<a href="https://wa.me/' . esc($waPhone) . '" target="_blank" style="display:inline-block;background:#25D366;color:#ffffff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:13px;margin:4px;">&#128172; WhatsApp Customer</a>';
}
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $actionButtons .= '<a href="mailto:' . esc($email) . '?subject=' . rawurlencode('Regarding Your Highline Himalayas Enquiry') . '" style="display:inline-block;background:#D84315;color:#ffffff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:13px;margin:4px;">&#9993; Email Customer</a>';
}
$actionButtons .= '</div>';

$htmlBody =
'<!DOCTYPE html><html><head><meta charset="utf-8"></head>' .
'<body style="font-family:Arial,Helvetica,sans-serif;background:#f1f5f9;margin:0;padding:24px;">' .
'<table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">' .
'<tr><td style="background:linear-gradient(90deg,#D84315,#FF6B00);padding:22px;color:#ffffff;">' .
'<h1 style="margin:0;font-size:20px;font-weight:bold;letter-spacing:-0.3px;">Highline Himalayas</h1>' .
'<p style="margin:6px 0 0;font-size:13px;color:#ffe0b2;">New Lead: ' . esc($cleanFormType) . '</p>' .
'</td></tr>' .
'<tr><td style="padding:24px;">' .
'<div style="background:#eff6ff;border-left:4px solid #1565C0;padding:12px 16px;border-radius:4px;margin-bottom:18px;">' .
'<p style="margin:0;font-size:13px;color:#1e3a8a;font-weight:600;">Customer Lead Details</p>' .
'</div>' .
'<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;"><tbody>' .
$tableRows .
'</tbody></table>' .
$actionButtons .
'<div style="margin-top:20px;padding-top:14px;border-top:1px solid #e2e8f0;font-size:11px;color:#64748b;text-align:center;">' .
'Submitted via official website &bull; highlinehimalayas.com' .
'</div>' .
'</td></tr></table></body></html>';

$cleanFormType = trim(str_ireplace(['- Customized Proposal', 'Customized Proposal', 'Proposal'], '', $formType));
if (empty($cleanFormType)) {
    $cleanFormType = 'Contact Us';
}

$cleanSubject = 'New Lead: ' . $name . ' (' . $phone . ') - ' . $cleanFormType;
if (!preg_match('/^[a-zA-Z0-9\s\-_\[\]\(\)\:\.\,\+\@]+$/', $cleanSubject)) {
    $cleanSubject = '=?UTF-8?B?' . base64_encode($cleanSubject) . '?=';
}

$smtpHost = 'smtp.hostinger.com';
$smtpPort = 465;
$smtpUser = 'info@highlinehimalayas.com';
$smtpPass = 'Highlinehim##2026!@#%123##';
$toEmail  = 'info@highlinehimalayas.com';

function smtp_send_lead($host, $port, $user, $pass, $to, $subject, $textBody, $htmlBody, $replyToEmail = '', $replyToName = '') {
    $context = stream_context_create([
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true
        ]
    ]);

    $sock = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    if (!$sock) return false;

    $read = function() use ($sock) {
        $r = '';
        while ($line = fgets($sock, 515)) {
            $r .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $r;
    };

    $cmd = function($c) use ($sock, $read) {
        fputs($sock, $c . "\r\n");
        return $read();
    };

    $read(); 
    $cmd("EHLO highlinehimalayas.com");
    $cmd("AUTH LOGIN");
    $cmd(base64_encode($user));
    $resp = $cmd(base64_encode($pass));
    if (strpos($resp, '235') === false) {
        fclose($sock);
        return false;
    }

    $cmd("MAIL FROM:<{$user}>");
    $cmd("RCPT TO:<{$to}>");
    $cmd("DATA");

    $boundary = 'boundary_' . md5(uniqid((string)time(), true));
    $dateHeader = date('r');
    $randomId = bin2hex(random_bytes(8));
    $messageId = "<lead.{$randomId}." . time() . "@highlinehimalayas.com>";

    $replyToHeader = "Reply-To: \"Highline Himalayas\" <{$user}>\r\n";

    $headers  = "Date: {$dateHeader}\r\n";
    $headers .= "Message-ID: {$messageId}\r\n";
    $headers .= "From: \"Highline Himalayas\" <{$user}>\r\n";
    $headers .= "To: \"Highline Himalayas\" <{$to}>\r\n";
    $headers .= $replyToHeader;
    $headers .= "Subject: {$subject}\r\n";
    $headers .= "Return-Path: <{$user}>\r\n";
    $headers .= "X-Mailer: HighlineHimalayasWeb/1.0\r\n";
    $headers .= "X-Priority: 3 (Normal)\r\n";
    $headers .= "Importance: Normal\r\n";
    $headers .= "Auto-Submitted: auto-generated\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";

    $msg  = "--{$boundary}\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $msg .= $textBody . "\r\n\r\n";
    $msg .= "--{$boundary}\r\n";
    $msg .= "Content-Type: text/html; charset=UTF-8\r\n";
    $msg .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $msg .= $htmlBody . "\r\n\r\n";
    $msg .= "--{$boundary}--\r\n";

    fputs($sock, $headers . "\r\n" . $msg . "\r\n.\r\n");
    $resp = $read();
    $cmd("QUIT");
    fclose($sock);

    return strpos($resp, '250') !== false;
}

$ok = smtp_send_lead(
    $smtpHost, $smtpPort,
    $smtpUser, $smtpPass,
    $toEmail,
    $cleanSubject,
    $textBody,
    $htmlBody,
    $email,
    $name
);

if ($ok) {
    echo json_encode(['success' => true, 'message' => 'Lead submitted successfully.']);
} else {
    // Fallback: PHP mail()
    $dateHeader = date('r');
    $randomId = bin2hex(random_bytes(8));
    $messageId = "<lead.{$randomId}." . time() . "@highlinehimalayas.com>";

    $mailHeaders  = "Date: {$dateHeader}\r\n";
    $mailHeaders .= "Message-ID: {$messageId}\r\n";
    $mailHeaders .= "From: \"Highline Himalayas\" <{$smtpUser}>\r\n";
    $mailHeaders .= "Return-Path: <{$smtpUser}>\r\n";
    $mailHeaders .= "Reply-To: \"Highline Himalayas\" <{$smtpUser}>\r\n";
    $mailHeaders .= "MIME-Version: 1.0\r\n";
    $mailHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $mailHeaders .= "X-Mailer: HighlineHimalayasWeb/1.0\r\n";
    $mailHeaders .= "Auto-Submitted: auto-generated\r\n";

    $sent = @mail($toEmail, $cleanSubject, $htmlBody, $mailHeaders);
    if ($sent) {
        echo json_encode(['success' => true, 'message' => 'Lead submitted successfully.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
}
