import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шелохнуться: PerfectVerb = {
  name: Word('шелохнуться', 6),
  singular1stPerson: Word('шелохнусь', 6),
  singular2ndPerson: Word('шелохнёшься', 1),
  singular3rdPerson: Word('шелохнётся', 1),
  plural1stPerson: Word('шелохнёмся', 1),
  plural2ndPerson: Word('шелохнётесь', 1),
  plural3rdPerson: Word('шелохнутся', 6),
  masculinePast: Word('шелохнулся', 6),
  femininePast: Word('шелохнулась', 6),
  neuterPast: Word('шелохнулось', 6),
  pluralPast: Word('шелохнулись', 6),
  imperativeInformal: Word('шелохнись', 6),
  imperativeFormal: Word('шелохнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(шелохнуться.name.text, шелохнуться);

export { шелохнуться };