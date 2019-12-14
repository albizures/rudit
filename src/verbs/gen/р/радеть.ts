import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const радеть: PerfectVerb = {
  name: Word('радеть', 3),
  singular1stPerson: Word('радею', 3),
  singular2ndPerson: Word('радеешь', 3),
  singular3rdPerson: Word('радеет', 3),
  plural1stPerson: Word('радеем', 3),
  plural2ndPerson: Word('радеете', 3),
  plural3rdPerson: Word('радеют', 3),
  masculinePast: Word('радел', 3),
  femininePast: Word('радела', 3),
  neuterPast: Word('радело', 3),
  pluralPast: Word('радели', 3),
  imperativeInformal: Word('радей', 3),
  imperativeFormal: Word('радейте', 3),
  imperfect: ['порадеть'],
};

perfectVerbs.set(радеть.name.text, радеть);

export { радеть };