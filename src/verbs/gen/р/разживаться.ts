import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разживаться: PerfectVerb = {
  name: Word('разживаться', 6),
  singular1stPerson: Word('разживаюсь', 6),
  singular2ndPerson: Word('разживаешься', 6),
  singular3rdPerson: Word('разживается', 6),
  plural1stPerson: Word('разживаемся', 6),
  plural2ndPerson: Word('разживаетесь', 6),
  plural3rdPerson: Word('разживаются', 6),
  masculinePast: Word('разживался', 6),
  femininePast: Word('разживалась', 6),
  neuterPast: Word('разживалось', 6),
  pluralPast: Word('разживались', 6),
  imperativeInformal: Word('разживайся', 6),
  imperativeFormal: Word('разживайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разживаться.name.text, разживаться);

export { разживаться };