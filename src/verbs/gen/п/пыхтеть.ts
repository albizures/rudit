import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пыхтеть: PerfectVerb = {
  name: Word('пыхтеть', 4),
  singular1stPerson: Word('пыхчу', 4),
  singular2ndPerson: Word('пыхтишь', 4),
  singular3rdPerson: Word('пыхтит', 4),
  plural1stPerson: Word('пыхтим', 4),
  plural2ndPerson: Word('пыхтите', 4),
  plural3rdPerson: Word('пыхтят', 4),
  masculinePast: Word('пыхтел', 4),
  femininePast: Word('пыхтела', 4),
  neuterPast: Word('пыхтело', 4),
  pluralPast: Word('пыхтели', 4),
  imperativeInformal: Word('пыхти', 4),
  imperativeFormal: Word('пыхтите', 4),
  imperfect: [],
};

perfectVerbs.set(пыхтеть.name.text, пыхтеть);

export { пыхтеть };