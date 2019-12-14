import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выливать: PerfectVerb = {
  name: Word('выливать', 5),
  singular1stPerson: Word('выливаю', 5),
  singular2ndPerson: Word('выливаешь', 5),
  singular3rdPerson: Word('выливает', 5),
  plural1stPerson: Word('выливаем', 5),
  plural2ndPerson: Word('выливаете', 5),
  plural3rdPerson: Word('выливают', 5),
  masculinePast: Word('выливал', 5),
  femininePast: Word('выливала', 5),
  neuterPast: Word('выливало', 5),
  pluralPast: Word('выливали', 5),
  imperativeInformal: Word('выливай', 5),
  imperativeFormal: Word('выливайте', 5),
  imperfect: ['вылить'],
};

perfectVerbs.set(выливать.name.text, выливать);

export { выливать };