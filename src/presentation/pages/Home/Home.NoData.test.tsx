import { render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Home from "./Home";
import Wrapper from "../../tools/wrappers/Wrapper";
import { ELang } from "../../tools/utils/intl/lang.enum";
import { langMap } from "../../tools/utils/intl";
import { setLocalLang } from "../../tools/utils/local-storage-manager";

describe.each([ELang.PT, ELang.ES, ELang.EN])("Home - NoData - %s", lang => {
  beforeEach(() => {
    vi.mock("../../api/hooks/photo", () => {
      return {
        useRandomPhotos: () => ({
          data: [],
          isLoading: false,
          isError: false,
          isSuccess: true,
        }),
        useGetPhotos: () => ({
          data: undefined,
          isLoading: false,
        }),
      };
    });
    setLocalLang(lang);
  });
  const langMessages = langMap[lang];
  it("Default", async () => {
    const { queryByText } = render(
      <Wrapper>
        <Home />
      </Wrapper>,
    );
    // check title
    expect(queryByText(langMessages["home.title"])).toBeInTheDocument();
    // wait for requests
    await waitFor(() => {
      expect(
        queryByText(langMessages["noPhotos.title"], { exact: false }),
      ).toBeInTheDocument();
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
