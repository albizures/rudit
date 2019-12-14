import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорубать: PerfectVerb = {
  name: Word('прорубать', 6),
  singular1stPerson: Word('прорубаю', 6),
  singular2ndPerson: Word('прорубаешь', 6),
  singular3rdPerson: Word('прорубает', 6),
  plural1stPerson: Word('прорубаем', 6),
  plural2ndPerson: Word('прорубаете', 6),
  plural3rdPerson: Word('прорубают', 6),
  masculinePast: Word('прорубал', 6),
  femininePast: Word('прорубала', 6),
  neuterPast: Word('прорубало', 6),
  pluralPast: Word('прорубали', 6),
  imperativeInformal: Word('прорубай', 6),
  imperativeFormal: Word('прорубайте', 6),
  imperfect: [],
};

perfectVerbs.set(прорубать.name.text, прорубать);

export { прорубать };