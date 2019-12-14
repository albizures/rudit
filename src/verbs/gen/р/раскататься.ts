import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскататься: PerfectVerb = {
  name: Word('раскататься', 6),
  singular1stPerson: Word('раскатаюсь', 6),
  singular2ndPerson: Word('раскатаешься', 6),
  singular3rdPerson: Word('раскатается', 6),
  plural1stPerson: Word('раскатаемся', 6),
  plural2ndPerson: Word('раскатаетесь', 6),
  plural3rdPerson: Word('раскатаются', 6),
  masculinePast: Word('раскатался', 6),
  femininePast: Word('раскаталась', 6),
  neuterPast: Word('раскаталось', 6),
  pluralPast: Word('раскатались', 6),
  imperativeInformal: Word('раскатайся', 6),
  imperativeFormal: Word('раскатайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(раскататься.name.text, раскататься);

export { раскататься };