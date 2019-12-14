import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const произнестись: PerfectVerb = {
  name: Word('произнестись', 9),
  singular1stPerson: Word('произнесусь', 8),
  singular2ndPerson: Word('произнесёшься', 8),
  singular3rdPerson: Word('произнесётся', 8),
  plural1stPerson: Word('произнесёмся', 8),
  plural2ndPerson: Word('произнесётесь', 8),
  plural3rdPerson: Word('произнесутся', 8),
  masculinePast: Word('произнёсся', 6),
  femininePast: Word('произнеслась', 9),
  neuterPast: Word('произнеслось', 9),
  pluralPast: Word('произнеслись', 9),
  imperativeInformal: Word('произнесись', 8),
  imperativeFormal: Word('произнеситесь', 8),
  imperfect: ['произноситься'],
};

perfectVerbs.set(произнестись.name.text, произнестись);

export { произнестись };