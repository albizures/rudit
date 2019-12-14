import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбредаться: PerfectVerb = {
  name: Word('разбредаться', 7),
  singular1stPerson: Word('разбредаюсь', 7),
  singular2ndPerson: Word('разбредаешься', 7),
  singular3rdPerson: Word('разбредается', 7),
  plural1stPerson: Word('разбредаемся', 7),
  plural2ndPerson: Word('разбредаетесь', 7),
  plural3rdPerson: Word('разбредаются', 7),
  masculinePast: Word('разбредался', 7),
  femininePast: Word('разбредалась', 7),
  neuterPast: Word('разбредалось', 7),
  pluralPast: Word('разбредались', 7),
  imperativeInformal: Word('разбредайся', 7),
  imperativeFormal: Word('разбредайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разбредаться.name.text, разбредаться);

export { разбредаться };