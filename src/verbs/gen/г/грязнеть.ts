import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грязнеть: PerfectVerb = {
  name: Word('грязнеть', 5),
  singular1stPerson: Word('грязнею', 5),
  singular2ndPerson: Word('грязнеешь', 5),
  singular3rdPerson: Word('грязнеет', 5),
  plural1stPerson: Word('грязнеем', 5),
  plural2ndPerson: Word('грязнеете', 5),
  plural3rdPerson: Word('грязнеют', 5),
  masculinePast: Word('грязнел', 5),
  femininePast: Word('грязнела', 5),
  neuterPast: Word('грязнело', 5),
  pluralPast: Word('грязнели', 5),
  imperativeInformal: Word('грязней', 5),
  imperativeFormal: Word('грязнейте', 5),
  imperfect: [],
};

perfectVerbs.set(грязнеть.name.text, грязнеть);

export { грязнеть };