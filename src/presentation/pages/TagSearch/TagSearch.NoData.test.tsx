import { render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Wrapper from "../../tools/wrappers/Wrapper";
import { ELang } from "../../tools/utils/intl/lang.enum";
import { langMap } from "../../tools/utils/intl";
import { setLocalLang } from "../../tools/utils/local-storage-manager";
import TagSearch from "./TagSearch";

describe.each([ELang.PT, ELang.ES, ELang.EN])("TagSearch - NoData - %s", lang => {
  beforeEach(() => {
    vi.mock("../../api/hooks/photo", () => {
      return {
        useSearchPhoto: () => ({
          data: {
            total: 0,
            totalPages: 0,
            results: [],
          },
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
        <TagSearch />
      </Wrapper>,
    );
    // check title
    expect(
      queryByText(langMessages["tagSearch.title"], { exact: false }),
    ).toBeInTheDocument();
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
