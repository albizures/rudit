import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накататься: PerfectVerb = {
  name: Word('накататься', 5),
  singular1stPerson: Word('накатаюсь', 5),
  singular2ndPerson: Word('накатаешься', 5),
  singular3rdPerson: Word('накатается', 5),
  plural1stPerson: Word('накатаемся', 5),
  plural2ndPerson: Word('накатаетесь', 5),
  plural3rdPerson: Word('накатаются', 5),
  masculinePast: Word('накатался', 5),
  femininePast: Word('накаталась', 5),
  neuterPast: Word('накаталось', 5),
  pluralPast: Word('накатались', 5),
  imperativeInformal: Word('накатайся', 5),
  imperativeFormal: Word('накатайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(накататься.name.text, накататься);

export { накататься };