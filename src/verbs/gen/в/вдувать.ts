import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдувать: PerfectVerb = {
  name: Word('вдувать', 4),
  singular1stPerson: Word('вдуваю', 4),
  singular2ndPerson: Word('вдуваешь', 4),
  singular3rdPerson: Word('вдувает', 4),
  plural1stPerson: Word('вдуваем', 4),
  plural2ndPerson: Word('вдуваете', 4),
  plural3rdPerson: Word('вдувают', 4),
  masculinePast: Word('вдувал', 4),
  femininePast: Word('вдувала', 4),
  neuterPast: Word('вдувало', 4),
  pluralPast: Word('вдували', 4),
  imperativeInformal: Word('вдувай', 4),
  imperativeFormal: Word('вдувайте', 4),
  imperfect: [],
};

perfectVerbs.set(вдувать.name.text, вдувать);

export { вдувать };