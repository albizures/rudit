import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натереться: PerfectVerb = {
  name: Word('натереться', 5),
  singular1stPerson: Word('натрусь', 4),
  singular2ndPerson: Word('натрёшься', 4),
  singular3rdPerson: Word('натрётся', 4),
  plural1stPerson: Word('натрёмся', 4),
  plural2ndPerson: Word('натрётесь', 4),
  plural3rdPerson: Word('натрутся', 4),
  masculinePast: Word('натёрся', 3),
  femininePast: Word('натёрлась', 3),
  neuterPast: Word('натёрлось', 3),
  pluralPast: Word('натёрлись', 3),
  imperativeInformal: Word('натрись', 4),
  imperativeFormal: Word('натритесь', 4),
  imperfect: [],
};

perfectVerbs.set(натереться.name.text, натереться);

export { натереться };