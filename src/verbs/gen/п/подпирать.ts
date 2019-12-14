import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпирать: PerfectVerb = {
  name: Word('подпирать', 6),
  singular1stPerson: Word('подпираю', 6),
  singular2ndPerson: Word('подпираешь', 6),
  singular3rdPerson: Word('подпирает', 6),
  plural1stPerson: Word('подпираем', 6),
  plural2ndPerson: Word('подпираете', 6),
  plural3rdPerson: Word('подпирают', 6),
  masculinePast: Word('подпирал', 6),
  femininePast: Word('подпирала', 6),
  neuterPast: Word('подпирало', 6),
  pluralPast: Word('подпирали', 6),
  imperativeInformal: Word('подпирай', 6),
  imperativeFormal: Word('подпирайте', 6),
  imperfect: [],
};

perfectVerbs.set(подпирать.name.text, подпирать);

export { подпирать };