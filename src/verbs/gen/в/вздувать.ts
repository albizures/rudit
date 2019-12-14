import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздувать: PerfectVerb = {
  name: Word('вздувать', 5),
  singular1stPerson: Word('вздуваю', 5),
  singular2ndPerson: Word('вздуваешь', 5),
  singular3rdPerson: Word('вздувает', 5),
  plural1stPerson: Word('вздуваем', 5),
  plural2ndPerson: Word('вздуваете', 5),
  plural3rdPerson: Word('вздувают', 5),
  masculinePast: Word('вздувал', 5),
  femininePast: Word('вздувала', 5),
  neuterPast: Word('вздувало', 5),
  pluralPast: Word('вздували', 5),
  imperativeInformal: Word('вздувай', 5),
  imperativeFormal: Word('вздувайте', 5),
  imperfect: [],
};

perfectVerbs.set(вздувать.name.text, вздувать);

export { вздувать };