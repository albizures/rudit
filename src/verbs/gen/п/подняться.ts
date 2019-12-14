import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подняться: PerfectVerb = {
  name: Word('подняться', 4),
  singular1stPerson: Word('поднимусь', 6),
  singular2ndPerson: Word('поднимешься', 4),
  singular3rdPerson: Word('поднимется', 4),
  plural1stPerson: Word('поднимемся', 4),
  plural2ndPerson: Word('подниметесь', 4),
  plural3rdPerson: Word('поднимутся', 4),
  masculinePast: Word('поднялся,поднялся'', 4),
  femininePast: Word('поднялась', 6),
  neuterPast: Word('поднялось,подняло'сь', 4),
  pluralPast: Word('поднялись,подняли'сь', 4),
  imperativeInformal: Word('поднимись', 6),
  imperativeFormal: Word('поднимитесь', 6),
  imperfect: ['подниматься'],
};

perfectVerbs.set(подняться.name.text, подняться);

export { подняться };