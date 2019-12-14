import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осуждать: PerfectVerb = {
  name: Word('осуждать', 5),
  singular1stPerson: Word('осуждаю', 5),
  singular2ndPerson: Word('осуждаешь', 5),
  singular3rdPerson: Word('осуждает', 5),
  plural1stPerson: Word('осуждаем', 5),
  plural2ndPerson: Word('осуждаете', 5),
  plural3rdPerson: Word('осуждают', 5),
  masculinePast: Word('осуждал', 5),
  femininePast: Word('осуждала', 5),
  neuterPast: Word('осуждало', 5),
  pluralPast: Word('осуждали', 5),
  imperativeInformal: Word('осуждай', 5),
  imperativeFormal: Word('осуждайте', 5),
  imperfect: ['осудить'],
};

perfectVerbs.set(осуждать.name.text, осуждать);

export { осуждать };