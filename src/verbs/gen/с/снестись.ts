import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снестись: PerfectVerb = {
  name: Word('снестись', 5),
  singular1stPerson: Word('снесусь', 4),
  singular2ndPerson: Word('снесёшься', 4),
  singular3rdPerson: Word('снесётся', 4),
  plural1stPerson: Word('снесёмся', 4),
  plural2ndPerson: Word('снесётесь', 4),
  plural3rdPerson: Word('снесутся', 4),
  masculinePast: Word('снёсся', 2),
  femininePast: Word('снеслась', 5),
  neuterPast: Word('снеслось', 5),
  pluralPast: Word('снеслись', 5),
  imperativeInformal: Word('снесись', 4),
  imperativeFormal: Word('снеситесь', 4),
  imperfect: [],
};

perfectVerbs.set(снестись.name.text, снестись);

export { снестись };