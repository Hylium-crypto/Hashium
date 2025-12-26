#!/bin/bash
# Script to rename all files/folders from Hashium to Hashium

echo "=== Renaming Hashium to Hashium ==="

# First, rename files (deepest first to avoid path issues)
find . -depth -name "*hashium*" ! -path "*/node_modules/*" ! -path "*/.git/*" ! -path "*/dist/*" -print0 2>/dev/null | while IFS= read -r -d '' file; do
    newname=$(echo "$file" | sed 's/hashium/hashium/g')
    if [ "$file" != "$newname" ]; then
        echo "Renaming: $file -> $newname"
        mv "$file" "$newname"
    fi
done

find . -depth -name "*Hashium*" ! -path "*/node_modules/*" ! -path "*/.git/*" ! -path "*/dist/*" -print0 2>/dev/null | while IFS= read -r -d '' file; do
    newname=$(echo "$file" | sed 's/Hashium/Hashium/g')
    if [ "$file" != "$newname" ]; then
        echo "Renaming: $file -> $newname"
        mv "$file" "$newname"
    fi
done

find . -depth -name "*HSM*" ! -path "*/node_modules/*" ! -path "*/.git/*" ! -path "*/dist/*" -print0 2>/dev/null | while IFS= read -r -d '' file; do
    newname=$(echo "$file" | sed 's/HSM/HSM/g')
    if [ "$file" != "$newname" ]; then
        echo "Renaming: $file -> $newname"
        mv "$file" "$newname"
    fi
done

echo "=== Done renaming files ==="

# Also replace content inside files
echo "=== Replacing content inside files ==="
find . \( -name "*.cpp" -o -name "*.h" -o -name "*.py" -o -name "*.sh" -o -name "*.md" -o -name "*.txt" -o -name "*.json" -o -name "*.ts" -o -name "*.tsx" -o -name "*.html" -o -name "*.css" -o -name "*.qrc" -o -name "*.rc" -o -name "Makefile*" -o -name "CMakeLists.txt" -o -name "*.cmake" -o -name "*.conf" -o -name "*.m4" \) ! -path "*/node_modules/*" ! -path "*/.git/*" ! -path "*/dist/*" -exec sed -i '' 's/hashium/hashium/g; s/Hashium/Hashium/g; s/HSM/HSM/g; s/HSMIUM/HASHIUM/g' {} \; 2>/dev/null

echo "=== All done! ==="
