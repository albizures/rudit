import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашататься: PerfectVerb = {
  name: Word('зашататься', 5),
  singular1stPerson: Word('зашатаюсь', 5),
  singular2ndPerson: Word('зашатаешься', 5),
  singular3rdPerson: Word('зашатается', 5),
  plural1stPerson: Word('зашатаемся', 5),
  plural2ndPerson: Word('зашатаетесь', 5),
  plural3rdPerson: Word('зашатаются', 5),
  masculinePast: Word('зашатался', 5),
  femininePast: Word('зашаталась', 5),
  neuterPast: Word('зашаталось', 5),
  pluralPast: Word('зашатались', 5),
  imperativeInformal: Word('зашатайся', 5),
  imperativeFormal: Word('зашатайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зашататься.name.text, зашататься);

export { зашататься };