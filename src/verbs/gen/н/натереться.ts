import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натереться: PerfectVerb = {
  name: Word('натереться', 5),
  singular1stPerson: Word('натрусь', 4),
  singular2ndPerson: Word('натрёшься', 1),
  singular3rdPerson: Word('натрётся', 1),
  plural1stPerson: Word('натрёмся', 1),
  plural2ndPerson: Word('натрётесь', 1),
  plural3rdPerson: Word('натрутся', 4),
  masculinePast: Word('натёрся', 1),
  femininePast: Word('натёрлась', 1),
  neuterPast: Word('натёрлось', 1),
  pluralPast: Word('натёрлись', 1),
  imperativeInformal: Word('натрись', 4),
  imperativeFormal: Word('натритесь', 4),
  imperfect: [],
};

perfectVerbs.set(натереться.name.text, натереться);

export { натереться };