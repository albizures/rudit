import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const владеть: PerfectVerb = {
  name: Word('владеть', 4),
  singular1stPerson: Word('владею', 4),
  singular2ndPerson: Word('владеешь', 4),
  singular3rdPerson: Word('владеет', 4),
  plural1stPerson: Word('владеем', 4),
  plural2ndPerson: Word('владеете', 4),
  plural3rdPerson: Word('владеют', 4),
  masculinePast: Word('владел', 4),
  femininePast: Word('владела', 4),
  neuterPast: Word('владело', 4),
  pluralPast: Word('владели', 4),
  imperativeInformal: Word('владей', 4),
  imperativeFormal: Word('владейте', 4),
  imperfect: ['завладеть'],
};

perfectVerbs.set(владеть.name.text, владеть);

export { владеть };