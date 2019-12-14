import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const яснеть: PerfectVerb = {
  name: Word('яснеть', 3),
  singular1stPerson: Word('яснею', 3),
  singular2ndPerson: Word('яснеешь', 3),
  singular3rdPerson: Word('яснеет', 3),
  plural1stPerson: Word('яснеем', 3),
  plural2ndPerson: Word('яснеете', 3),
  plural3rdPerson: Word('яснеют', 3),
  masculinePast: Word('яснел', 3),
  femininePast: Word('яснела', 3),
  neuterPast: Word('яснело', 3),
  pluralPast: Word('яснели', 3),
  imperativeInformal: Word('ясней', 3),
  imperativeFormal: Word('яснейте', 3),
  imperfect: [],
};

perfectVerbs.set(яснеть.name.text, яснеть);

export { яснеть };