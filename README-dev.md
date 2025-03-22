
# Developer Guide: Data Science AI Portfolio

This guide provides clear instructions and best practices for managing and maintaining the project.

---

## ✅ Git Workflow

### Commit Checklist

1. **Stage files**
   ```bash
   git add .
   ```

2. **Verify changes**
   ```bash
   git status
   ```

3. **Run pre-commit checks**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit with structure**
   ```bash
   git commit -m "feat: improve AIChat fallback handling"
   ```

---

### Branch & Merge Strategy

1. **Update main**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Sync feature branch**
   ```bash
   git checkout your-feature-branch
   git merge main
   ```

3. **Merge into main**
   ```bash
   git checkout main
   git merge your-feature-branch
   git push origin main
   ```

---

## ✅ GitHub Rules & CI/CD

### Branch Protection Rules for `main`

- Require status checks before merging
- Require branches to be up to date before merging
- Disallow force pushes
- Require pull requests (optional for solo)
- Enforce signed commits (optional)

---

## ✅ Netlify Deployment

1. **Domain Setup**
   - Use Netlify DNS to point to your custom domain.
   - Update nameservers at your registrar to:
     ```
     dns1.p04.nsone.net
     dns2.p04.nsone.net
     dns3.p04.nsone.net
     dns4.p04.nsone.net
     ```

2. **Automatic Deploy**
   - GitHub > Connected Repo > Deploys automatically
   - Use `/netlify.toml` for custom build config (optional)

---

## ✅ Other Notes

- **Contact Form**: Uses `nodemailer` + Gmail App Password
- **AIChat**: Uses hardcoded intelligent fallback logic
- **Security**: Store secrets in Netlify Environment Variables
- **Blog & Projects**: Use local JSON files unless you expect dynamic content

---

© Jason Robinson. All Rights Reserved.
