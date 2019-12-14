import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуться: PerfectVerb = {
  name: Word('обуться', 2),
  singular1stPerson: Word('обуюсь', 2),
  singular2ndPerson: Word('обуешься', 2),
  singular3rdPerson: Word('обуется', 2),
  plural1stPerson: Word('обуемся', 2),
  plural2ndPerson: Word('обуетесь', 2),
  plural3rdPerson: Word('обуются', 2),
  masculinePast: Word('обулся', 2),
  femininePast: Word('обулась', 2),
  neuterPast: Word('обулось', 2),
  pluralPast: Word('обулись', 2),
  imperativeInformal: Word('обуйся', 2),
  imperativeFormal: Word('обуйтесь', 2),
  imperfect: [],
};

perfectVerbs.set(обуться.name.text, обуться);

export { обуться };