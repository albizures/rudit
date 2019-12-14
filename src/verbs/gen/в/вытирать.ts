import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытирать: PerfectVerb = {
  name: Word('вытирать', 5),
  singular1stPerson: Word('вытираю', 5),
  singular2ndPerson: Word('вытираешь', 5),
  singular3rdPerson: Word('вытирает', 5),
  plural1stPerson: Word('вытираем', 5),
  plural2ndPerson: Word('вытираете', 5),
  plural3rdPerson: Word('вытирают', 5),
  masculinePast: Word('вытирал', 5),
  femininePast: Word('вытирала', 5),
  neuterPast: Word('вытирало', 5),
  pluralPast: Word('вытирали', 5),
  imperativeInformal: Word('вытирай', 5),
  imperativeFormal: Word('вытирайте', 5),
  imperfect: ['вытереть'],
};

perfectVerbs.set(вытирать.name.text, вытирать);

export { вытирать };