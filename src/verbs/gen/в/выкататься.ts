import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкататься: PerfectVerb = {
  name: Word('выкататься', 1),
  singular1stPerson: Word('выкатаюсь', 1),
  singular2ndPerson: Word('выкатаешься', 1),
  singular3rdPerson: Word('выкатается', 1),
  plural1stPerson: Word('выкатаемся', 1),
  plural2ndPerson: Word('выкатаетесь', 1),
  plural3rdPerson: Word('выкатаются', 1),
  masculinePast: Word('выкатался', 1),
  femininePast: Word('выкаталась', 1),
  neuterPast: Word('выкаталось', 1),
  pluralPast: Word('выкатались', 1),
  imperativeInformal: Word('выкатайся', 1),
  imperativeFormal: Word('выкатайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выкататься.name.text, выкататься);

export { выкататься };