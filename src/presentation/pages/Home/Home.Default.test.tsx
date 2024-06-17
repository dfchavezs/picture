import { render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Home from "./Home";
import Wrapper from "../../tools/wrappers/Wrapper";
import { ELang } from "../../tools/utils/intl/lang.enum";
import { langMap } from "../../tools/utils/intl";
import { setLocalLang } from "../../tools/utils/local-storage-manager";
import { generatePhoto } from "../../../core/infrastructure/mock/photo.service";
import { faker } from "@faker-js/faker";

const nPhotos = faker.number.int({ min: 1, max: 30 });

const photos = Array.from({ length: nPhotos }, () => generatePhoto()).map(photo => ({
  ...photo,
  createdAt: new Date(photo.created_at),
}));

describe.each([ELang.PT, ELang.ES, ELang.EN])("Home - %s", lang => {
  beforeEach(() => {
    vi.mock("../../api/hooks/photo", () => {
      return {
        useRandomPhotos: () => ({
          data: photos,
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
  const langMessages = langMap[lang];
  it("Default", async () => {
    const { queryByText, queryAllByText } = render(
      <Wrapper>
        <Home />
      </Wrapper>,
    );
    // check title
    expect(queryByText(langMessages["home.title"])).toBeInTheDocument();
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
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
