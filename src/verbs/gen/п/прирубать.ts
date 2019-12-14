import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прирубать: PerfectVerb = {
  name: Word('прирубать', 6),
  singular1stPerson: Word('прирубаю', 6),
  singular2ndPerson: Word('прирубаешь', 6),
  singular3rdPerson: Word('прирубает', 6),
  plural1stPerson: Word('прирубаем', 6),
  plural2ndPerson: Word('прирубаете', 6),
  plural3rdPerson: Word('прирубают', 6),
  masculinePast: Word('прирубал', 6),
  femininePast: Word('прирубала', 6),
  neuterPast: Word('прирубало', 6),
  pluralPast: Word('прирубали', 6),
  imperativeInformal: Word('прирубай', 6),
  imperativeFormal: Word('прирубайте', 6),
  imperfect: [],
};

perfectVerbs.set(прирубать.name.text, прирубать);

export { прирубать };