import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обувать: PerfectVerb = {
  name: Word('обувать', 4),
  singular1stPerson: Word('обуваю', 4),
  singular2ndPerson: Word('обуваешь', 4),
  singular3rdPerson: Word('обувает', 4),
  plural1stPerson: Word('обуваем', 4),
  plural2ndPerson: Word('обуваете', 4),
  plural3rdPerson: Word('обувают', 4),
  masculinePast: Word('обувал', 4),
  femininePast: Word('обувала', 4),
  neuterPast: Word('обувало', 4),
  pluralPast: Word('обували', 4),
  imperativeInformal: Word('обувай', 4),
  imperativeFormal: Word('обувайте', 4),
  imperfect: [],
};

perfectVerbs.set(обувать.name.text, обувать);

export { обувать };