import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздувать: PerfectVerb = {
  name: Word('раздувать', 6),
  singular1stPerson: Word('раздуваю', 6),
  singular2ndPerson: Word('раздуваешь', 6),
  singular3rdPerson: Word('раздувает', 6),
  plural1stPerson: Word('раздуваем', 6),
  plural2ndPerson: Word('раздуваете', 6),
  plural3rdPerson: Word('раздувают', 6),
  masculinePast: Word('раздувал', 6),
  femininePast: Word('раздувала', 6),
  neuterPast: Word('раздувало', 6),
  pluralPast: Word('раздували', 6),
  imperativeInformal: Word('раздувай', 6),
  imperativeFormal: Word('раздувайте', 6),
  imperfect: [],
};

perfectVerbs.set(раздувать.name.text, раздувать);

export { раздувать };