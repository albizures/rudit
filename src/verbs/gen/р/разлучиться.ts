import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлучиться: PerfectVerb = {
  name: Word('разлучиться', 6),
  singular1stPerson: Word('разлучусь', 6),
  singular2ndPerson: Word('разлучишься', 6),
  singular3rdPerson: Word('разлучится', 6),
  plural1stPerson: Word('разлучимся', 6),
  plural2ndPerson: Word('разлучитесь', 6),
  plural3rdPerson: Word('разлучатся', 6),
  masculinePast: Word('разлучился', 6),
  femininePast: Word('разлучилась', 6),
  neuterPast: Word('разлучилось', 6),
  pluralPast: Word('разлучились', 6),
  imperativeInformal: Word('разлучись', 6),
  imperativeFormal: Word('разлучитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разлучиться.name.text, разлучиться);

export { разлучиться };