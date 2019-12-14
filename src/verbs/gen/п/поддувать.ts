import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддувать: PerfectVerb = {
  name: Word('поддувать', 6),
  singular1stPerson: Word('поддуваю', 6),
  singular2ndPerson: Word('поддуваешь', 6),
  singular3rdPerson: Word('поддувает', 6),
  plural1stPerson: Word('поддуваем', 6),
  plural2ndPerson: Word('поддуваете', 6),
  plural3rdPerson: Word('поддувают', 6),
  masculinePast: Word('поддувал', 6),
  femininePast: Word('поддувала', 6),
  neuterPast: Word('поддувало', 6),
  pluralPast: Word('поддували', 6),
  imperativeInformal: Word('поддувай', 6),
  imperativeFormal: Word('поддувайте', 6),
  imperfect: [],
};

perfectVerbs.set(поддувать.name.text, поддувать);

export { поддувать };