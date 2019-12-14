import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укататься: PerfectVerb = {
  name: Word('укататься', 4),
  singular1stPerson: Word('укатаюсь', 4),
  singular2ndPerson: Word('укатаешься', 4),
  singular3rdPerson: Word('укатается', 4),
  plural1stPerson: Word('укатаемся', 4),
  plural2ndPerson: Word('укатаетесь', 4),
  plural3rdPerson: Word('укатаются', 4),
  masculinePast: Word('укатался', 4),
  femininePast: Word('укаталась', 4),
  neuterPast: Word('укаталось', 4),
  pluralPast: Word('укатались', 4),
  imperativeInformal: Word('укатайся', 4),
  imperativeFormal: Word('укатайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(укататься.name.text, укататься);

export { укататься };