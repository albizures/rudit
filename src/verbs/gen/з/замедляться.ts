import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замедляться: PerfectVerb = {
  name: Word('замедляться', 6),
  singular1stPerson: Word('замедляюсь', 6),
  singular2ndPerson: Word('замедляешься', 6),
  singular3rdPerson: Word('замедляется', 6),
  plural1stPerson: Word('замедляемся', 6),
  plural2ndPerson: Word('замедляетесь', 6),
  plural3rdPerson: Word('замедляются', 6),
  masculinePast: Word('замедлялся', 6),
  femininePast: Word('замедлялась', 6),
  neuterPast: Word('замедлялось', 6),
  pluralPast: Word('замедлялись', 6),
  imperativeInformal: Word('замедляйся', 6),
  imperativeFormal: Word('замедляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(замедляться.name.text, замедляться);

export { замедляться };