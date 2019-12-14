import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разоружаться: PerfectVerb = {
  name: Word('разоружаться', 7),
  singular1stPerson: Word('разоружаюсь', 7),
  singular2ndPerson: Word('разоружаешься', 7),
  singular3rdPerson: Word('разоружается', 7),
  plural1stPerson: Word('разоружаемся', 7),
  plural2ndPerson: Word('разоружаетесь', 7),
  plural3rdPerson: Word('разоружаются', 7),
  masculinePast: Word('разоружался', 7),
  femininePast: Word('разоружалась', 7),
  neuterPast: Word('разоружалось', 7),
  pluralPast: Word('разоружались', 7),
  imperativeInformal: Word('разоружайся', 7),
  imperativeFormal: Word('разоружайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разоружаться.name.text, разоружаться);

export { разоружаться };