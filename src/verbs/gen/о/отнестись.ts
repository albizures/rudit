import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отнестись: PerfectVerb = {
  name: Word('отнестись', 6),
  singular1stPerson: Word('отнесусь', 5),
  singular2ndPerson: Word('отнесёшься', 3),
  singular3rdPerson: Word('отнесётся', 3),
  plural1stPerson: Word('отнесёмся', 3),
  plural2ndPerson: Word('отнесётесь', 3),
  plural3rdPerson: Word('отнесутся', 5),
  masculinePast: Word('отнёсся', 0),
  femininePast: Word('отнеслась', 6),
  neuterPast: Word('отнеслось', 6),
  pluralPast: Word('отнеслись', 6),
  imperativeInformal: Word('отнесись', 5),
  imperativeFormal: Word('отнеситесь', 5),
  imperfect: [],
};

perfectVerbs.set(отнестись.name.text, отнестись);

export { отнестись };