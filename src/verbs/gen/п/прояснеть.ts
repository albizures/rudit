import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прояснеть: PerfectVerb = {
  name: Word('прояснеть', 6),
  singular1stPerson: Word('прояснею', 6),
  singular2ndPerson: Word('прояснеешь', 6),
  singular3rdPerson: Word('прояснеет', 6),
  plural1stPerson: Word('прояснеем', 6),
  plural2ndPerson: Word('прояснеете', 6),
  plural3rdPerson: Word('прояснеют', 6),
  masculinePast: Word('прояснел', 6),
  femininePast: Word('прояснела', 6),
  neuterPast: Word('прояснело', 6),
  pluralPast: Word('прояснели', 6),
  imperativeInformal: Word('проясней', 6),
  imperativeFormal: Word('прояснейте', 6),
  imperfect: [],
};

perfectVerbs.set(прояснеть.name.text, прояснеть);

export { прояснеть };