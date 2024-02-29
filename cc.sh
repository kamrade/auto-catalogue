#!/bin/bash
cd ./src/lib/components
touch $1.svelte

> $1.svelte
echo "<script lang='ts'>" >> $1.svelte
printf "\n" >> $1.svelte
echo "</script>" >> $1.svelte
printf "\n" >> $1.svelte
echo "<div class='$1'></div>" >> $1.svelte
printf "\n" >> $1.svelte
echo "<style lang='scss'>" >> $1.svelte
printf "\n" >> $1.svelte
echo  ".$1 {}" >> $1.svelte
printf "\n" >> $1.svelte
echo "</style>" >> $1.svelte