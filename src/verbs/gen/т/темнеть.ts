import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const темнеть: PerfectVerb = {
  name: Word('темнеть', 4),
  singular1stPerson: Word('темнею', 4),
  singular2ndPerson: Word('темнеешь', 4),
  singular3rdPerson: Word('темнеет', 4),
  plural1stPerson: Word('темнеем', 4),
  plural2ndPerson: Word('темнеете', 4),
  plural3rdPerson: Word('темнеют', 4),
  masculinePast: Word('темнел', 4),
  femininePast: Word('темнела', 4),
  neuterPast: Word('темнело', 4),
  pluralPast: Word('темнели', 4),
  imperativeInformal: Word('темней', 4),
  imperativeFormal: Word('темнейте', 4),
  imperfect: [],
};

perfectVerbs.set(темнеть.name.text, темнеть);

export { темнеть };