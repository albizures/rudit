import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорезать: PerfectVerb = {
  name: Word('прорезать', 6),
  singular1stPerson: Word('прорезаю', 6),
  singular2ndPerson: Word('прорезаешь', 6),
  singular3rdPerson: Word('прорезает', 6),
  plural1stPerson: Word('прорезаем', 6),
  plural2ndPerson: Word('прорезаете', 6),
  plural3rdPerson: Word('прорезают', 6),
  masculinePast: Word('прорезал', 6),
  femininePast: Word('прорезала', 6),
  neuterPast: Word('прорезало', 6),
  pluralPast: Word('прорезали', 6),
  imperativeInformal: Word('прорезай', 6),
  imperativeFormal: Word('прорезайте', 6),
  imperfect: [],
};

perfectVerbs.set(прорезать.name.text, прорезать);

export { прорезать };