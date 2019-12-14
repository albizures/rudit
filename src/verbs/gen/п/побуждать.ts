import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побуждать: PerfectVerb = {
  name: Word('побуждать', 6),
  singular1stPerson: Word('побуждаю', 6),
  singular2ndPerson: Word('побуждаешь', 6),
  singular3rdPerson: Word('побуждает', 6),
  plural1stPerson: Word('побуждаем', 6),
  plural2ndPerson: Word('побуждаете', 6),
  plural3rdPerson: Word('побуждают', 6),
  masculinePast: Word('побуждал', 6),
  femininePast: Word('побуждала', 6),
  neuterPast: Word('побуждало', 6),
  pluralPast: Word('побуждали', 6),
  imperativeInformal: Word('побуждай', 6),
  imperativeFormal: Word('побуждайте', 6),
  imperfect: ['побудить'],
};

perfectVerbs.set(побуждать.name.text, побуждать);

export { побуждать };