import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приподымать: PerfectVerb = {
  name: Word('приподымать', 8),
  singular1stPerson: Word('приподымаю', 8),
  singular2ndPerson: Word('приподымаешь', 8),
  singular3rdPerson: Word('приподымает', 8),
  plural1stPerson: Word('приподымаем', 8),
  plural2ndPerson: Word('приподымаете', 8),
  plural3rdPerson: Word('приподымают', 8),
  masculinePast: Word('приподымал', 8),
  femininePast: Word('приподымала', 8),
  neuterPast: Word('приподымало', 8),
  pluralPast: Word('приподымали', 8),
  imperativeInformal: Word('приподымай', 8),
  imperativeFormal: Word('приподымайте', 8),
  imperfect: [],
};

perfectVerbs.set(приподымать.name.text, приподымать);

export { приподымать };