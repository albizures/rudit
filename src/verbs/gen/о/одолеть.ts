import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одолеть: PerfectVerb = {
  name: Word('одолеть', 4),
  singular1stPerson: Word('одолею', 4),
  singular2ndPerson: Word('одолеешь', 4),
  singular3rdPerson: Word('одолеет', 4),
  plural1stPerson: Word('одолеем', 4),
  plural2ndPerson: Word('одолеете', 4),
  plural3rdPerson: Word('одолеют', 4),
  masculinePast: Word('одолел', 4),
  femininePast: Word('одолела', 4),
  neuterPast: Word('одолело', 4),
  pluralPast: Word('одолели', 4),
  imperativeInformal: Word('одолей', 4),
  imperativeFormal: Word('одолейте', 4),
  imperfect: [],
};

perfectVerbs.set(одолеть.name.text, одолеть);

export { одолеть };