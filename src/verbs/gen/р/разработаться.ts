import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разработаться: PerfectVerb = {
  name: Word('разработаться', 6),
  singular1stPerson: Word('разработаюсь', 6),
  singular2ndPerson: Word('разработаешься', 6),
  singular3rdPerson: Word('разработается', 6),
  plural1stPerson: Word('разработаемся', 6),
  plural2ndPerson: Word('разработаетесь', 6),
  plural3rdPerson: Word('разработаются', 6),
  masculinePast: Word('разработался', 6),
  femininePast: Word('разработалась', 6),
  neuterPast: Word('разработалось', 6),
  pluralPast: Word('разработались', 6),
  imperativeInformal: Word('разработайся', 6),
  imperativeFormal: Word('разработайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разработаться.name.text, разработаться);

export { разработаться };