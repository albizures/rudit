import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгневаться: PerfectVerb = {
  name: Word('разгневаться', 5),
  singular1stPerson: Word('разгневаюсь', 5),
  singular2ndPerson: Word('разгневаешься', 5),
  singular3rdPerson: Word('разгневается', 5),
  plural1stPerson: Word('разгневаемся', 5),
  plural2ndPerson: Word('разгневаетесь', 5),
  plural3rdPerson: Word('разгневаются', 5),
  masculinePast: Word('разгневался', 5),
  femininePast: Word('разгневалась', 5),
  neuterPast: Word('разгневалось', 5),
  pluralPast: Word('разгневались', 5),
  imperativeInformal: Word('разгневайся', 5),
  imperativeFormal: Word('разгневайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разгневаться.name.text, разгневаться);

export { разгневаться };