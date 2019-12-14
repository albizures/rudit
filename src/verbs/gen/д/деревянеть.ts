import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деревянеть: PerfectVerb = {
  name: Word('деревянеть', 7),
  singular1stPerson: Word('деревянею', 7),
  singular2ndPerson: Word('деревянеешь', 7),
  singular3rdPerson: Word('деревянеет', 7),
  plural1stPerson: Word('деревянеем', 7),
  plural2ndPerson: Word('деревянеете', 7),
  plural3rdPerson: Word('деревянеют', 7),
  masculinePast: Word('деревянел', 7),
  femininePast: Word('деревянела', 7),
  neuterPast: Word('деревянело', 7),
  pluralPast: Word('деревянели', 7),
  imperativeInformal: Word('деревяней', 7),
  imperativeFormal: Word('деревянейте', 7),
  imperfect: ['одеревянеть'],
};

perfectVerbs.set(деревянеть.name.text, деревянеть);

export { деревянеть };