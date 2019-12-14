import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запыхтеть: PerfectVerb = {
  name: Word('запыхтеть', 6),
  singular1stPerson: Word('запыхчу', 6),
  singular2ndPerson: Word('запыхтишь', 6),
  singular3rdPerson: Word('запыхтит', 6),
  plural1stPerson: Word('запыхтим', 6),
  plural2ndPerson: Word('запыхтите', 6),
  plural3rdPerson: Word('запыхтят', 6),
  masculinePast: Word('запыхтел', 6),
  femininePast: Word('запыхтела', 6),
  neuterPast: Word('запыхтело', 6),
  pluralPast: Word('запыхтели', 6),
  imperativeInformal: Word('запыхти', 6),
  imperativeFormal: Word('запыхтите', 6),
  imperfect: [],
};

perfectVerbs.set(запыхтеть.name.text, запыхтеть);

export { запыхтеть };