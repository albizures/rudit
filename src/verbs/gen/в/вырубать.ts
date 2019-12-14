import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырубать: PerfectVerb = {
  name: Word('вырубать', 5),
  singular1stPerson: Word('вырубаю', 5),
  singular2ndPerson: Word('вырубаешь', 5),
  singular3rdPerson: Word('вырубает', 5),
  plural1stPerson: Word('вырубаем', 5),
  plural2ndPerson: Word('вырубаете', 5),
  plural3rdPerson: Word('вырубают', 5),
  masculinePast: Word('вырубал', 5),
  femininePast: Word('вырубала', 5),
  neuterPast: Word('вырубало', 5),
  pluralPast: Word('вырубали', 5),
  imperativeInformal: Word('вырубай', 5),
  imperativeFormal: Word('вырубайте', 5),
  imperfect: [],
};

perfectVerbs.set(вырубать.name.text, вырубать);

export { вырубать };