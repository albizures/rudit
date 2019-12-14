import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разуться: PerfectVerb = {
  name: Word('разуться', 3),
  singular1stPerson: Word('разуюсь', 3),
  singular2ndPerson: Word('разуешься', 3),
  singular3rdPerson: Word('разуется', 3),
  plural1stPerson: Word('разуемся', 3),
  plural2ndPerson: Word('разуетесь', 3),
  plural3rdPerson: Word('разуются', 3),
  masculinePast: Word('разулся', 3),
  femininePast: Word('разулась', 3),
  neuterPast: Word('разулось', 3),
  pluralPast: Word('разулись', 3),
  imperativeInformal: Word('разуйся', 3),
  imperativeFormal: Word('разуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(разуться.name.text, разуться);

export { разуться };