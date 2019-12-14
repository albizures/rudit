import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгружаться: PerfectVerb = {
  name: Word('разгружаться', 7),
  singular1stPerson: Word('разгружаюсь', 7),
  singular2ndPerson: Word('разгружаешься', 7),
  singular3rdPerson: Word('разгружается', 7),
  plural1stPerson: Word('разгружаемся', 7),
  plural2ndPerson: Word('разгружаетесь', 7),
  plural3rdPerson: Word('разгружаются', 7),
  masculinePast: Word('разгружался', 7),
  femininePast: Word('разгружалась', 7),
  neuterPast: Word('разгружалось', 7),
  pluralPast: Word('разгружались', 7),
  imperativeInformal: Word('разгружайся', 7),
  imperativeFormal: Word('разгружайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разгружаться.name.text, разгружаться);

export { разгружаться };