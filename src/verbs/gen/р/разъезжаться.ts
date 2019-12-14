import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъезжаться: PerfectVerb = {
  name: Word('разъезжаться', 7),
  singular1stPerson: Word('разъезжаюсь', 7),
  singular2ndPerson: Word('разъезжаешься', 7),
  singular3rdPerson: Word('разъезжается', 7),
  plural1stPerson: Word('разъезжаемся', 7),
  plural2ndPerson: Word('разъезжаетесь', 7),
  plural3rdPerson: Word('разъезжаются', 7),
  masculinePast: Word('разъезжался', 7),
  femininePast: Word('разъезжалась', 7),
  neuterPast: Word('разъезжалось', 7),
  pluralPast: Word('разъезжались', 7),
  imperativeInformal: Word('разъезжайся', 7),
  imperativeFormal: Word('разъезжайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разъезжаться.name.text, разъезжаться);

export { разъезжаться };