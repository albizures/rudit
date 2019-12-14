import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простереться: PerfectVerb = {
  name: Word('простереться', 7),
  singular1stPerson: Word('прострусь', 6),
  singular2ndPerson: Word('прострёшься', 2),
  singular3rdPerson: Word('прострётся', 2),
  plural1stPerson: Word('прострёмся', 2),
  plural2ndPerson: Word('прострётесь', 8),
  plural3rdPerson: Word('прострутся', 6),
  masculinePast: Word('простерся', 5),
  femininePast: Word('простерлась', 5),
  neuterPast: Word('простерлось', 5),
  pluralPast: Word('простерлись', 5),
  imperativeInformal: Word('прострись', 6),
  imperativeFormal: Word('простритесь', 6),
  imperfect: [],
};

perfectVerbs.set(простереться.name.text, простереться);

export { простереться };