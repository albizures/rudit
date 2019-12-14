import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плесневеть: PerfectVerb = {
  name: Word('плесневеть', 2),
  singular1stPerson: Word('плесневею', 2),
  singular2ndPerson: Word('плесневеешь', 2),
  singular3rdPerson: Word('плесневеет', 2),
  plural1stPerson: Word('плесневеем', 2),
  plural2ndPerson: Word('плесневеете', 2),
  plural3rdPerson: Word('плесневеют', 2),
  masculinePast: Word('плесневел', 2),
  femininePast: Word('плесневела', 2),
  neuterPast: Word('плесневело', 2),
  pluralPast: Word('плесневели', 2),
  imperativeInformal: Word('плесневей', 2),
  imperativeFormal: Word('плесневейте', 2),
  imperfect: [],
};

perfectVerbs.set(плесневеть.name.text, плесневеть);

export { плесневеть };