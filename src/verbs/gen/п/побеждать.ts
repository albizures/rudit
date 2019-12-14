import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побеждать: PerfectVerb = {
  name: Word('побеждать', 6),
  singular1stPerson: Word('побеждаю', 6),
  singular2ndPerson: Word('побеждаешь', 6),
  singular3rdPerson: Word('побеждает', 6),
  plural1stPerson: Word('побеждаем', 6),
  plural2ndPerson: Word('побеждаете', 6),
  plural3rdPerson: Word('побеждают', 6),
  masculinePast: Word('побеждал', 6),
  femininePast: Word('побеждала', 6),
  neuterPast: Word('побеждало', 6),
  pluralPast: Word('побеждали', 6),
  imperativeInformal: Word('побеждай', 6),
  imperativeFormal: Word('побеждайте', 6),
  imperfect: ['победить'],
};

perfectVerbs.set(побеждать.name.text, побеждать);

export { побеждать };