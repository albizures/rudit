import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колебать: PerfectVerb = {
  name: Word('колебать', 5),
  singular1stPerson: Word('колеблю', 3),
  singular2ndPerson: Word('колеблешь', 3),
  singular3rdPerson: Word('колеблет', 3),
  plural1stPerson: Word('колеблем', 3),
  plural2ndPerson: Word('колеблете', 3),
  plural3rdPerson: Word('колеблют', 3),
  masculinePast: Word('колебал', 5),
  femininePast: Word('колебала', 5),
  neuterPast: Word('колебало', 5),
  pluralPast: Word('колебали', 5),
  imperativeInformal: Word('колебли', 3),
  imperativeFormal: Word('колеблите', 3),
  imperfect: [],
};

perfectVerbs.set(колебать.name.text, колебать);

export { колебать };