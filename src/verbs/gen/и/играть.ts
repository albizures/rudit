import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const играть: PerfectVerb = {
  name: Word('играть', 3),
  singular1stPerson: Word('играю', 3),
  singular2ndPerson: Word('играешь', 3),
  singular3rdPerson: Word('играет', 3),
  plural1stPerson: Word('играем', 3),
  plural2ndPerson: Word('играете', 3),
  plural3rdPerson: Word('играют', 3),
  masculinePast: Word('играл', 3),
  femininePast: Word('играла', 3),
  neuterPast: Word('играло', 3),
  pluralPast: Word('играли', 3),
  imperativeInformal: Word('играй', 3),
  imperativeFormal: Word('играйте', 3),
  imperfect: ['сыграть','поиграть'],
};

perfectVerbs.set(играть.name.text, играть);

export { играть };