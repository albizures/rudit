import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнаруживаться: PerfectVerb = {
  name: Word('обнаруживаться', 5),
  singular1stPerson: Word('обнаруживаюсь', 5),
  singular2ndPerson: Word('обнаруживаешься', 5),
  singular3rdPerson: Word('обнаруживается', 5),
  plural1stPerson: Word('обнаруживаемся', 5),
  plural2ndPerson: Word('обнаруживаетесь', 5),
  plural3rdPerson: Word('обнаруживаются', 5),
  masculinePast: Word('обнаруживался', 5),
  femininePast: Word('обнаруживалась', 5),
  neuterPast: Word('обнаруживалось', 5),
  pluralPast: Word('обнаруживались', 5),
  imperativeInformal: Word('обнаруживайся', 5),
  imperativeFormal: Word('обнаруживайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обнаруживаться.name.text, обнаруживаться);

export { обнаруживаться };