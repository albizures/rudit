import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздражаться: PerfectVerb = {
  name: Word('раздражаться', 7),
  singular1stPerson: Word('раздражаюсь', 7),
  singular2ndPerson: Word('раздражаешься', 7),
  singular3rdPerson: Word('раздражается', 7),
  plural1stPerson: Word('раздражаемся', 7),
  plural2ndPerson: Word('раздражаетесь', 7),
  plural3rdPerson: Word('раздражаются', 7),
  masculinePast: Word('раздражался', 7),
  femininePast: Word('раздражалась', 7),
  neuterPast: Word('раздражалось', 7),
  pluralPast: Word('раздражались', 7),
  imperativeInformal: Word('раздражайся', 7),
  imperativeFormal: Word('раздражайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(раздражаться.name.text, раздражаться);

export { раздражаться };