import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надувать: PerfectVerb = {
  name: Word('надувать', 5),
  singular1stPerson: Word('надуваю', 5),
  singular2ndPerson: Word('надуваешь', 5),
  singular3rdPerson: Word('надувает', 5),
  plural1stPerson: Word('надуваем', 5),
  plural2ndPerson: Word('надуваете', 5),
  plural3rdPerson: Word('надувают', 5),
  masculinePast: Word('надувал', 5),
  femininePast: Word('надувала', 5),
  neuterPast: Word('надувало', 5),
  pluralPast: Word('надували', 5),
  imperativeInformal: Word('надувай', 5),
  imperativeFormal: Word('надувайте', 5),
  imperfect: [],
};

perfectVerbs.set(надувать.name.text, надувать);

export { надувать };