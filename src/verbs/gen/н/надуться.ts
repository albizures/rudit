import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надуться: PerfectVerb = {
  name: Word('надуться', 3),
  singular1stPerson: Word('надуюсь', 3),
  singular2ndPerson: Word('надуешься', 3),
  singular3rdPerson: Word('надуется', 3),
  plural1stPerson: Word('надуемся', 3),
  plural2ndPerson: Word('надуетесь', 3),
  plural3rdPerson: Word('надуются', 3),
  masculinePast: Word('надулся', 3),
  femininePast: Word('надулась', 3),
  neuterPast: Word('надулось', 3),
  pluralPast: Word('надулись', 3),
  imperativeInformal: Word('надуйся', 3),
  imperativeFormal: Word('надуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(надуться.name.text, надуться);

export { надуться };