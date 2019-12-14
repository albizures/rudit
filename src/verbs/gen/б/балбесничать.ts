import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const балбесничать: PerfectVerb = {
  name: Word('балбесничать', 4),
  singular1stPerson: Word('балбесничаю', 4),
  singular2ndPerson: Word('балбесничаешь', 4),
  singular3rdPerson: Word('балбесничает', 4),
  plural1stPerson: Word('балбесничаем', 4),
  plural2ndPerson: Word('балбесничаете', 4),
  plural3rdPerson: Word('балбесничают', 4),
  masculinePast: Word('балбесничал', 4),
  femininePast: Word('балбесничала', 4),
  neuterPast: Word('балбесничало', 4),
  pluralPast: Word('балбесничали', 4),
  imperativeInformal: Word('балбесничай', 4),
  imperativeFormal: Word('балбесничайте', 4),
  imperfect: [],
};

perfectVerbs.set(балбесничать.name.text, балбесничать);

export { балбесничать };