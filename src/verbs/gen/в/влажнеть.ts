import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влажнеть: PerfectVerb = {
  name: Word('влажнеть', 5),
  singular1stPerson: Word('влажнею', 5),
  singular2ndPerson: Word('влажнеешь', 5),
  singular3rdPerson: Word('влажнеет', 5),
  plural1stPerson: Word('влажнеем', 5),
  plural2ndPerson: Word('влажнеете', 5),
  plural3rdPerson: Word('влажнеют', 5),
  masculinePast: Word('влажнел', 5),
  femininePast: Word('влажнела', 5),
  neuterPast: Word('влажнело', 5),
  pluralPast: Word('влажнели', 5),
  imperativeInformal: Word('влажней', 5),
  imperativeFormal: Word('влажнейте', 5),
  imperfect: [],
};

perfectVerbs.set(влажнеть.name.text, влажнеть);

export { влажнеть };