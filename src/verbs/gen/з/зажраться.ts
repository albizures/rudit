import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажраться: PerfectVerb = {
  name: Word('зажраться', 4),
  singular1stPerson: Word('зажрусь', 4),
  singular2ndPerson: Word('зажрёшься', 1),
  singular3rdPerson: Word('зажрётся', 1),
  plural1stPerson: Word('зажрёмся', 1),
  plural2ndPerson: Word('зажрётесь', 1),
  plural3rdPerson: Word('зажрутся', 4),
  masculinePast: Word('зажрался', 4),
  femininePast: Word('зажралась', 6),
  neuterPast: Word('зажралось//зажрало'сь', 4),
  pluralPast: Word('зажрались//зажрали'сь', 4),
  imperativeInformal: Word('зажрись', 4),
  imperativeFormal: Word('зажритесь', 4),
  imperfect: [],
};

perfectVerbs.set(зажраться.name.text, зажраться);

export { зажраться };