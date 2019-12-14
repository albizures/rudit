import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкататься: PerfectVerb = {
  name: Word('обкататься', 5),
  singular1stPerson: Word('обкатаюсь', 5),
  singular2ndPerson: Word('обкатаешься', 5),
  singular3rdPerson: Word('обкатается', 5),
  plural1stPerson: Word('обкатаемся', 5),
  plural2ndPerson: Word('обкатаетесь', 5),
  plural3rdPerson: Word('обкатаются', 5),
  masculinePast: Word('обкатался', 5),
  femininePast: Word('обкаталась', 5),
  neuterPast: Word('обкаталось', 5),
  pluralPast: Word('обкатались', 5),
  imperativeInformal: Word('обкатайся', 5),
  imperativeFormal: Word('обкатайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обкататься.name.text, обкататься);

export { обкататься };