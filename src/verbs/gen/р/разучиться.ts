import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разучиться: PerfectVerb = {
  name: Word('разучиться', 5),
  singular1stPerson: Word('разучусь', 5),
  singular2ndPerson: Word('разучишься', 3),
  singular3rdPerson: Word('разучится', 3),
  plural1stPerson: Word('разучимся', 3),
  plural2ndPerson: Word('разучитесь', 3),
  plural3rdPerson: Word('разучатся', 3),
  masculinePast: Word('разучился', 5),
  femininePast: Word('разучилась', 5),
  neuterPast: Word('разучилось', 5),
  pluralPast: Word('разучились', 5),
  imperativeInformal: Word('разучись', 5),
  imperativeFormal: Word('разучитесь', 5),
  imperfect: [],
};

perfectVerbs.set(разучиться.name.text, разучиться);

export { разучиться };