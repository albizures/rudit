import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const манежить: PerfectVerb = {
  name: Word('манежить', 3),
  singular1stPerson: Word('манежу', 3),
  singular2ndPerson: Word('манежишь', 3),
  singular3rdPerson: Word('манежит', 3),
  plural1stPerson: Word('манежим', 3),
  plural2ndPerson: Word('манежите', 3),
  plural3rdPerson: Word('манежат', 3),
  masculinePast: Word('манежил', 3),
  femininePast: Word('манежила', 3),
  neuterPast: Word('манежило', 3),
  pluralPast: Word('манежили', 3),
  imperativeInformal: Word('манежь', 3),
  imperativeFormal: Word('манежьте', 3),
  imperfect: [],
};

perfectVerbs.set(манежить.name.text, манежить);

export { манежить };