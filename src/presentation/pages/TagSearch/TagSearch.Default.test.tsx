import { render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Wrapper from "../../tools/wrappers/Wrapper";
import { ELang } from "../../tools/utils/intl/lang.enum";
import { langMap } from "../../tools/utils/intl";
import { setLocalLang } from "../../tools/utils/local-storage-manager";
import { generatePhoto } from "../../../core/infrastructure/mock/photo.service";
import TagSearch from "./TagSearch";
import { faker } from "@faker-js/faker";
import { ROWS_PER_PAGE } from "../../../config";

const nPhotos = ROWS_PER_PAGE;
const total = faker.number.int({ min: ROWS_PER_PAGE + 1 });

const photos = Array.from({ length: nPhotos }, () => generatePhoto()).map(photo => ({
  ...photo,
  createdAt: new Date(photo.created_at),
}));

describe.each([ELang.PT, ELang.ES, ELang.EN])("TagSearch - %s", lang => {
  beforeEach(() => {
    vi.mock("../../api/hooks/photo", () => {
      return {
        useSearchPhoto: () => ({
          data: {
            total,
            totalPages: Math.ceil(total / ROWS_PER_PAGE),
            results: photos,
          },
          isLoading: false,
          isError: false,
          isSuccess: true,
        }),
        useGetPhotos: () => ({
          data: photos,
          isLoading: false,
        }),
      };
    });
    setLocalLang(lang);
  });
  // Get current language
  const langMessages = langMap[lang];

  it("Default", async () => {
    const { queryByText, queryAllByText } = render(
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
      // Check n photos
      expect(queryAllByText(langMessages["card.takenOn"], { exact: false })).toHaveLength(
        nPhotos,
      );
      // no maintenance
      expect(
        queryByText(langMessages["maintenance.title"], { exact: false }),
      ).not.toBeInTheDocument();
      // there is data
      expect(
        queryByText(langMessages["noPhotos.title"], { exact: false }),
      ).not.toBeInTheDocument();
    });
    // paginator should appear
    const paginator = document.querySelector(".p-paginator");
    expect(paginator).toBeInTheDocument();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
