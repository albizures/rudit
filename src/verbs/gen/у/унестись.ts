import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унестись: PerfectVerb = {
  name: Word('унестись', 5),
  singular1stPerson: Word('унесусь', 4),
  singular2ndPerson: Word('унесёшься', 4),
  singular3rdPerson: Word('унесётся', 4),
  plural1stPerson: Word('унесёмся', 4),
  plural2ndPerson: Word('унесётесь', 4),
  plural3rdPerson: Word('унесутся', 4),
  masculinePast: Word('унёсся', 2),
  femininePast: Word('унеслась', 5),
  neuterPast: Word('унеслось', 5),
  pluralPast: Word('унеслись', 5),
  imperativeInformal: Word('унесись', 4),
  imperativeFormal: Word('унеситесь', 4),
  imperfect: [],
};

perfectVerbs.set(унестись.name.text, унестись);

export { унестись };