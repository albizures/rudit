import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приседать: PerfectVerb = {
  name: Word('приседать', 6),
  singular1stPerson: Word('приседаю', 6),
  singular2ndPerson: Word('приседаешь', 6),
  singular3rdPerson: Word('приседает', 6),
  plural1stPerson: Word('приседаем', 6),
  plural2ndPerson: Word('приседаете', 6),
  plural3rdPerson: Word('приседают', 6),
  masculinePast: Word('приседал', 6),
  femininePast: Word('приседала', 6),
  neuterPast: Word('приседало', 6),
  pluralPast: Word('приседали', 6),
  imperativeInformal: Word('приседай', 6),
  imperativeFormal: Word('приседайте', 6),
  imperfect: [],
};

perfectVerbs.set(приседать.name.text, приседать);

export { приседать };