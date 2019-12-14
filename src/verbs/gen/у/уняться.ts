import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уняться: PerfectVerb = {
  name: Word('уняться', 2),
  singular1stPerson: Word('уймусь', 3),
  singular2ndPerson: Word('уймёшься', 1),
  singular3rdPerson: Word('уймётся', 1),
  plural1stPerson: Word('уймёмся', 1),
  plural2ndPerson: Word('уймётесь', 5),
  plural3rdPerson: Word('уймутся', 3),
  masculinePast: Word('унялся', 2),
  femininePast: Word('унялась', 4),
  neuterPast: Word('унялось//уняло'сь', 2),
  pluralPast: Word('унялись//уняли'сь', 2),
  imperativeInformal: Word('уймись', 3),
  imperativeFormal: Word('уймитесь', 3),
  imperfect: [],
};

perfectVerbs.set(уняться.name.text, уняться);

export { уняться };