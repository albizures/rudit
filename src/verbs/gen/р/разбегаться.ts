import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбегаться: PerfectVerb = {
  name: Word('разбегаться', 6),
  singular1stPerson: Word('разбегаюсь', 6),
  singular2ndPerson: Word('разбегаешься', 6),
  singular3rdPerson: Word('разбегается', 6),
  plural1stPerson: Word('разбегаемся', 6),
  plural2ndPerson: Word('разбегаетесь', 6),
  plural3rdPerson: Word('разбегаются', 6),
  masculinePast: Word('разбегался', 6),
  femininePast: Word('разбегалась', 6),
  neuterPast: Word('разбегалось', 6),
  pluralPast: Word('разбегались', 6),
  imperativeInformal: Word('разбегайся', 6),
  imperativeFormal: Word('разбегайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разбегаться.name.text, разбегаться);

export { разбегаться };