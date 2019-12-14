import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срубать: PerfectVerb = {
  name: Word('срубать', 4),
  singular1stPerson: Word('срубаю', 4),
  singular2ndPerson: Word('срубаешь', 4),
  singular3rdPerson: Word('срубает', 4),
  plural1stPerson: Word('срубаем', 4),
  plural2ndPerson: Word('срубаете', 4),
  plural3rdPerson: Word('срубают', 4),
  masculinePast: Word('срубал', 4),
  femininePast: Word('срубала', 4),
  neuterPast: Word('срубало', 4),
  pluralPast: Word('срубали', 4),
  imperativeInformal: Word('срубай', 4),
  imperativeFormal: Word('срубайте', 4),
  imperfect: [],
};

perfectVerbs.set(срубать.name.text, срубать);

export { срубать };