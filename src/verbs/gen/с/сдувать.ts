import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдувать: PerfectVerb = {
  name: Word('сдувать', 4),
  singular1stPerson: Word('сдуваю', 4),
  singular2ndPerson: Word('сдуваешь', 4),
  singular3rdPerson: Word('сдувает', 4),
  plural1stPerson: Word('сдуваем', 4),
  plural2ndPerson: Word('сдуваете', 4),
  plural3rdPerson: Word('сдувают', 4),
  masculinePast: Word('сдувал', 4),
  femininePast: Word('сдувала', 4),
  neuterPast: Word('сдувало', 4),
  pluralPast: Word('сдували', 4),
  imperativeInformal: Word('сдувай', 4),
  imperativeFormal: Word('сдувайте', 4),
  imperfect: [],
};

perfectVerbs.set(сдувать.name.text, сдувать);

export { сдувать };