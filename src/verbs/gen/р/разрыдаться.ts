import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрыдаться: PerfectVerb = {
  name: Word('разрыдаться', 6),
  singular1stPerson: Word('разрыдаюсь', 6),
  singular2ndPerson: Word('разрыдаешься', 6),
  singular3rdPerson: Word('разрыдается', 6),
  plural1stPerson: Word('разрыдаемся', 6),
  plural2ndPerson: Word('разрыдаетесь', 6),
  plural3rdPerson: Word('разрыдаются', 6),
  masculinePast: Word('разрыдался', 6),
  femininePast: Word('разрыдалась', 6),
  neuterPast: Word('разрыдалось', 6),
  pluralPast: Word('разрыдались', 6),
  imperativeInformal: Word('разрыдайся', 6),
  imperativeFormal: Word('разрыдайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрыдаться.name.text, разрыдаться);

export { разрыдаться };