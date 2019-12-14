import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наливать: PerfectVerb = {
  name: Word('наливать', 5),
  singular1stPerson: Word('наливаю', 5),
  singular2ndPerson: Word('наливаешь', 5),
  singular3rdPerson: Word('наливает', 5),
  plural1stPerson: Word('наливаем', 5),
  plural2ndPerson: Word('наливаете', 5),
  plural3rdPerson: Word('наливают', 5),
  masculinePast: Word('наливал', 5),
  femininePast: Word('наливала', 5),
  neuterPast: Word('наливало', 5),
  pluralPast: Word('наливали', 5),
  imperativeInformal: Word('наливай', 5),
  imperativeFormal: Word('наливайте', 5),
  imperfect: ['налить'],
};

perfectVerbs.set(наливать.name.text, наливать);

export { наливать };