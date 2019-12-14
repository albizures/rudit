import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разахаться: PerfectVerb = {
  name: Word('разахаться', 3),
  singular1stPerson: Word('разахаюсь', 3),
  singular2ndPerson: Word('разахаешься', 3),
  singular3rdPerson: Word('разахается', 3),
  plural1stPerson: Word('разахаемся', 3),
  plural2ndPerson: Word('разахаетесь', 3),
  plural3rdPerson: Word('разахаются', 3),
  masculinePast: Word('разахался', 3),
  femininePast: Word('разахалась', 3),
  neuterPast: Word('разахалось', 3),
  pluralPast: Word('разахались', 3),
  imperativeInformal: Word('разахайся', 3),
  imperativeFormal: Word('разахайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(разахаться.name.text, разахаться);

export { разахаться };