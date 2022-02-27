import { Octokit } from "octokit";
import invariant from "tiny-invariant";

const octokit = new Octokit({ auth: process.env.OCTOKIT_TOKEN });

async function downloadDirList(path: string) {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "cychien",
      repo: "css-eureka",
      path,
    }
  );

  invariant(
    Array.isArray(data),
    `Tried to download content from ${path}. GitHub did not return an array of files. This should never happen...`
  );

  return data;
}

// ex. posts/aaa.mdx
async function downloadFile(path: string) {
  const { data } = (await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "cychien",
      repo: "css-eureka",
      path,
    }
  )) as { data: { content?: string; encoding?: string } };

  invariant(
    data.content && data.encoding,
    `Tried to get ${path} but got back something that was unexpected. It doesn't have a content or encoding property`
  );

  const encoding = data.encoding as Parameters<typeof Buffer.from>["1"];
  return Buffer.from(data.content, encoding).toString();
}

export { downloadDirList, downloadFile };
