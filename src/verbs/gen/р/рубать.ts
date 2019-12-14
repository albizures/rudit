import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рубать: PerfectVerb = {
  name: Word('рубать', 3),
  singular1stPerson: Word('рубаю', 3),
  singular2ndPerson: Word('рубаешь', 3),
  singular3rdPerson: Word('рубает', 3),
  plural1stPerson: Word('рубаем', 3),
  plural2ndPerson: Word('рубаете', 3),
  plural3rdPerson: Word('рубают', 3),
  masculinePast: Word('рубал', 3),
  femininePast: Word('рубала', 3),
  neuterPast: Word('рубало', 3),
  pluralPast: Word('рубали', 3),
  imperativeInformal: Word('рубай', 3),
  imperativeFormal: Word('рубайте', 3),
  imperfect: [],
};

perfectVerbs.set(рубать.name.text, рубать);

export { рубать };