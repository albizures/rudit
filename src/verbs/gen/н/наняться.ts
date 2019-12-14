import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наняться: PerfectVerb = {
  name: Word('наняться', 3),
  singular1stPerson: Word('наймусь', 4),
  singular2ndPerson: Word('наймёшься', 4),
  singular3rdPerson: Word('наймётся', 4),
  plural1stPerson: Word('наймёмся', 4),
  plural2ndPerson: Word('наймётесь', 4),
  plural3rdPerson: Word('наймутся', 4),
  masculinePast: Word('нанялся', 3),
  femininePast: Word('нанялась', 5),
  neuterPast: Word('нанялось', 5),
  pluralPast: Word('нанялись', 5),
  imperativeInformal: Word('наймись', 4),
  imperativeFormal: Word('наймитесь', 4),
  imperfect: [],
};

perfectVerbs.set(наняться.name.text, наняться);

export { наняться };