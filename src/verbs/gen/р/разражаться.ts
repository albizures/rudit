import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разражаться: PerfectVerb = {
  name: Word('разражаться', 6),
  singular1stPerson: Word('разражаюсь', 6),
  singular2ndPerson: Word('разражаешься', 6),
  singular3rdPerson: Word('разражается', 6),
  plural1stPerson: Word('разражаемся', 6),
  plural2ndPerson: Word('разражаетесь', 6),
  plural3rdPerson: Word('разражаются', 6),
  masculinePast: Word('разражался', 6),
  femininePast: Word('разражалась', 6),
  neuterPast: Word('разражалось', 6),
  pluralPast: Word('разражались', 6),
  imperativeInformal: Word('разражайся', 6),
  imperativeFormal: Word('разражайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разражаться.name.text, разражаться);

export { разражаться };