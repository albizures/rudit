import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const худеть: PerfectVerb = {
  name: Word('худеть', 3),
  singular1stPerson: Word('худею', 3),
  singular2ndPerson: Word('худеешь', 3),
  singular3rdPerson: Word('худеет', 3),
  plural1stPerson: Word('худеем', 3),
  plural2ndPerson: Word('худеете', 3),
  plural3rdPerson: Word('худеют', 3),
  masculinePast: Word('худел', 3),
  femininePast: Word('худела', 3),
  neuterPast: Word('худело', 3),
  pluralPast: Word('худели', 3),
  imperativeInformal: Word('худей', 3),
  imperativeFormal: Word('худейте', 3),
  imperfect: ['похудеть'],
};

perfectVerbs.set(худеть.name.text, худеть);

export { худеть };