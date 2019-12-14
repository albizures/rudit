import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попереться: PerfectVerb = {
  name: Word('попереться', 5),
  singular1stPerson: Word('попрусь', 4),
  singular2ndPerson: Word('попрёшься', 1),
  singular3rdPerson: Word('попрётся', 1),
  plural1stPerson: Word('попрёмся', 1),
  plural2ndPerson: Word('попрётесь', 6),
  plural3rdPerson: Word('попрутся', 4),
  masculinePast: Word('поперся', 3),
  femininePast: Word('поперлась', 3),
  neuterPast: Word('поперлось', 3),
  pluralPast: Word('поперлись', 3),
  imperativeInformal: Word('попрись', 4),
  imperativeFormal: Word('попритесь', 4),
  imperfect: [],
};

perfectVerbs.set(попереться.name.text, попереться);

export { попереться };