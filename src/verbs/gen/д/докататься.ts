import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докататься: PerfectVerb = {
  name: Word('докататься', 5),
  singular1stPerson: Word('докатаюсь', 5),
  singular2ndPerson: Word('докатаешься', 5),
  singular3rdPerson: Word('докатается', 5),
  plural1stPerson: Word('докатаемся', 5),
  plural2ndPerson: Word('докатаетесь', 5),
  plural3rdPerson: Word('докатаются', 5),
  masculinePast: Word('докатался', 5),
  femininePast: Word('докаталась', 5),
  neuterPast: Word('докаталось', 5),
  pluralPast: Word('докатались', 5),
  imperativeInformal: Word('докатайся', 5),
  imperativeFormal: Word('докатайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(докататься.name.text, докататься);

export { докататься };