import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надрезать: PerfectVerb = {
  name: Word('надрезать', 6),
  singular1stPerson: Word('надрезаю', 6),
  singular2ndPerson: Word('надрезаешь', 6),
  singular3rdPerson: Word('надрезает', 6),
  plural1stPerson: Word('надрезаем', 6),
  plural2ndPerson: Word('надрезаете', 6),
  plural3rdPerson: Word('надрезают', 6),
  masculinePast: Word('надрезал', 6),
  femininePast: Word('надрезала', 6),
  neuterPast: Word('надрезало', 6),
  pluralPast: Word('надрезали', 6),
  imperativeInformal: Word('надрезай', 6),
  imperativeFormal: Word('надрезайте', 6),
  imperfect: [],
};

perfectVerbs.set(надрезать.name.text, надрезать);

export { надрезать };