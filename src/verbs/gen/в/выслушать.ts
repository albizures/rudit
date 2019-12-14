import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выслушать: PerfectVerb = {
  name: Word('выслушать', 1),
  singular1stPerson: Word('выслушаю', 1),
  singular2ndPerson: Word('выслушаешь', 1),
  singular3rdPerson: Word('выслушает', 1),
  plural1stPerson: Word('выслушаем', 1),
  plural2ndPerson: Word('выслушаете', 1),
  plural3rdPerson: Word('выслушают', 1),
  masculinePast: Word('выслушал', 1),
  femininePast: Word('выслушала', 1),
  neuterPast: Word('выслушало', 1),
  pluralPast: Word('выслушали', 1),
  imperativeInformal: Word('выслушай', 1),
  imperativeFormal: Word('выслушайте', 1),
  imperfect: ['выслушивать'],
};

perfectVerbs.set(выслушать.name.text, выслушать);

export { выслушать };