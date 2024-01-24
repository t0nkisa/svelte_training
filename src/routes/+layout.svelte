<script lang="ts">
    import "../app.css";
    import type { LayoutServerData } from './$types';
    export let data: LayoutServerData;
    console.log(data);
    
</script>

<span>
    {data.deploymentGitBranch}
</span>

<slot></slot>
