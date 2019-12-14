import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приделать: PerfectVerb = {
  name: Word('приделать', 4),
  singular1stPerson: Word('приделаю', 4),
  singular2ndPerson: Word('приделаешь', 4),
  singular3rdPerson: Word('приделает', 4),
  plural1stPerson: Word('приделаем', 4),
  plural2ndPerson: Word('приделаете', 4),
  plural3rdPerson: Word('приделают', 4),
  masculinePast: Word('приделал', 4),
  femininePast: Word('приделала', 4),
  neuterPast: Word('приделало', 4),
  pluralPast: Word('приделали', 4),
  imperativeInformal: Word('приделай', 4),
  imperativeFormal: Word('приделайте', 4),
  imperfect: [],
};

perfectVerbs.set(приделать.name.text, приделать);

export { приделать };