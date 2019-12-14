import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынуждать: PerfectVerb = {
  name: Word('вынуждать', 6),
  singular1stPerson: Word('вынуждаю', 6),
  singular2ndPerson: Word('вынуждаешь', 6),
  singular3rdPerson: Word('вынуждает', 6),
  plural1stPerson: Word('вынуждаем', 6),
  plural2ndPerson: Word('вынуждаете', 6),
  plural3rdPerson: Word('вынуждают', 6),
  masculinePast: Word('вынуждал', 6),
  femininePast: Word('вынуждала', 6),
  neuterPast: Word('вынуждало', 6),
  pluralPast: Word('вынуждали', 6),
  imperativeInformal: Word('вынуждай', 6),
  imperativeFormal: Word('вынуждайте', 6),
  imperfect: ['вынудить'],
};

perfectVerbs.set(вынуждать.name.text, вынуждать);

export { вынуждать };