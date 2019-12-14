import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бледнеть: PerfectVerb = {
  name: Word('бледнеть', 5),
  singular1stPerson: Word('бледнею', 5),
  singular2ndPerson: Word('бледнеешь', 5),
  singular3rdPerson: Word('бледнеет', 5),
  plural1stPerson: Word('бледнеем', 5),
  plural2ndPerson: Word('бледнеете', 5),
  plural3rdPerson: Word('бледнеют', 5),
  masculinePast: Word('бледнел', 5),
  femininePast: Word('бледнела', 5),
  neuterPast: Word('бледнело', 5),
  pluralPast: Word('бледнели', 5),
  imperativeInformal: Word('бледней', 5),
  imperativeFormal: Word('бледнейте', 5),
  imperfect: ['побледнеть'],
};

perfectVerbs.set(бледнеть.name.text, бледнеть);

export { бледнеть };