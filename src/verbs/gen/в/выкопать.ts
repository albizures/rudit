import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкопать: PerfectVerb = {
  name: Word('выкопать', 1),
  singular1stPerson: Word('выкопаю', 1),
  singular2ndPerson: Word('выкопаешь', 1),
  singular3rdPerson: Word('выкопает', 1),
  plural1stPerson: Word('выкопаем', 1),
  plural2ndPerson: Word('выкопаете', 1),
  plural3rdPerson: Word('выкопают', 1),
  masculinePast: Word('выкопал', 1),
  femininePast: Word('выкопала', 1),
  neuterPast: Word('выкопало', 1),
  pluralPast: Word('выкопали', 1),
  imperativeInformal: Word('выкопай', 1),
  imperativeFormal: Word('выкопайте', 1),
  imperfect: [],
};

perfectVerbs.set(выкопать.name.text, выкопать);

export { выкопать };