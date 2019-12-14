import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взлезать: PerfectVerb = {
  name: Word('взлезать', 5),
  singular1stPerson: Word('взлезаю', 5),
  singular2ndPerson: Word('взлезаешь', 5),
  singular3rdPerson: Word('взлезает', 5),
  plural1stPerson: Word('взлезаем', 5),
  plural2ndPerson: Word('взлезаете', 5),
  plural3rdPerson: Word('взлезают', 5),
  masculinePast: Word('взлезал', 5),
  femininePast: Word('взлезала', 5),
  neuterPast: Word('взлезало', 5),
  pluralPast: Word('взлезали', 5),
  imperativeInformal: Word('взлезай', 5),
  imperativeFormal: Word('взлезайте', 5),
  imperfect: [],
};

perfectVerbs.set(взлезать.name.text, взлезать);

export { взлезать };