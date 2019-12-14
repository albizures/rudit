import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдувать: PerfectVerb = {
  name: Word('обдувать', 5),
  singular1stPerson: Word('обдуваю', 5),
  singular2ndPerson: Word('обдуваешь', 5),
  singular3rdPerson: Word('обдувает', 5),
  plural1stPerson: Word('обдуваем', 5),
  plural2ndPerson: Word('обдуваете', 5),
  plural3rdPerson: Word('обдувают', 5),
  masculinePast: Word('обдувал', 5),
  femininePast: Word('обдувала', 5),
  neuterPast: Word('обдувало', 5),
  pluralPast: Word('обдували', 5),
  imperativeInformal: Word('обдувай', 5),
  imperativeFormal: Word('обдувайте', 5),
  imperfect: [],
};

perfectVerbs.set(обдувать.name.text, обдувать);

export { обдувать };