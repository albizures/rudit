import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдувать: PerfectVerb = {
  name: Word('выдувать', 5),
  singular1stPerson: Word('выдуваю', 5),
  singular2ndPerson: Word('выдуваешь', 5),
  singular3rdPerson: Word('выдувает', 5),
  plural1stPerson: Word('выдуваем', 5),
  plural2ndPerson: Word('выдуваете', 5),
  plural3rdPerson: Word('выдувают', 5),
  masculinePast: Word('выдувал', 5),
  femininePast: Word('выдувала', 5),
  neuterPast: Word('выдувало', 5),
  pluralPast: Word('выдували', 5),
  imperativeInformal: Word('выдувай', 5),
  imperativeFormal: Word('выдувайте', 5),
  imperfect: [],
};

perfectVerbs.set(выдувать.name.text, выдувать);

export { выдувать };