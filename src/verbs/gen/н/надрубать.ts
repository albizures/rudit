import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надрубать: PerfectVerb = {
  name: Word('надрубать', 6),
  singular1stPerson: Word('надрубаю', 6),
  singular2ndPerson: Word('надрубаешь', 6),
  singular3rdPerson: Word('надрубает', 6),
  plural1stPerson: Word('надрубаем', 6),
  plural2ndPerson: Word('надрубаете', 6),
  plural3rdPerson: Word('надрубают', 6),
  masculinePast: Word('надрубал', 6),
  femininePast: Word('надрубала', 6),
  neuterPast: Word('надрубало', 6),
  pluralPast: Word('надрубали', 6),
  imperativeInformal: Word('надрубай', 6),
  imperativeFormal: Word('надрубайте', 6),
  imperfect: [],
};

perfectVerbs.set(надрубать.name.text, надрубать);

export { надрубать };