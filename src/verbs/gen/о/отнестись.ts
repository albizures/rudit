import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отнестись: PerfectVerb = {
  name: Word('отнестись', 6),
  singular1stPerson: Word('отнесусь', 5),
  singular2ndPerson: Word('отнесёшься', 5),
  singular3rdPerson: Word('отнесётся', 5),
  plural1stPerson: Word('отнесёмся', 5),
  plural2ndPerson: Word('отнесётесь', 5),
  plural3rdPerson: Word('отнесутся', 5),
  masculinePast: Word('отнёсся', 3),
  femininePast: Word('отнеслась', 6),
  neuterPast: Word('отнеслось', 6),
  pluralPast: Word('отнеслись', 6),
  imperativeInformal: Word('отнесись', 5),
  imperativeFormal: Word('отнеситесь', 5),
  imperfect: [],
};

perfectVerbs.set(отнестись.name.text, отнестись);

export { отнестись };