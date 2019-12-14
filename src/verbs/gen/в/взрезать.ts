import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взрезать: PerfectVerb = {
  name: Word('взрезать', 5),
  singular1stPerson: Word('взрезаю', 5),
  singular2ndPerson: Word('взрезаешь', 5),
  singular3rdPerson: Word('взрезает', 5),
  plural1stPerson: Word('взрезаем', 5),
  plural2ndPerson: Word('взрезаете', 5),
  plural3rdPerson: Word('взрезают', 5),
  masculinePast: Word('взрезал', 5),
  femininePast: Word('взрезала', 5),
  neuterPast: Word('взрезало', 5),
  pluralPast: Word('взрезали', 5),
  imperativeInformal: Word('взрезай', 5),
  imperativeFormal: Word('взрезайте', 5),
  imperfect: [],
};

perfectVerbs.set(взрезать.name.text, взрезать);

export { взрезать };