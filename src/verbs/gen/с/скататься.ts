import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скататься: PerfectVerb = {
  name: Word('скататься', 4),
  singular1stPerson: Word('скатаюсь', 4),
  singular2ndPerson: Word('скатаешься', 4),
  singular3rdPerson: Word('скатается', 4),
  plural1stPerson: Word('скатаемся', 4),
  plural2ndPerson: Word('скатаетесь', 4),
  plural3rdPerson: Word('скатаются', 4),
  masculinePast: Word('скатался', 4),
  femininePast: Word('скаталась', 4),
  neuterPast: Word('скаталось', 4),
  pluralPast: Word('скатались', 4),
  imperativeInformal: Word('скатайся', 4),
  imperativeFormal: Word('скатайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(скататься.name.text, скататься);

export { скататься };