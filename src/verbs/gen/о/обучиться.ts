import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обучиться: PerfectVerb = {
  name: Word('обучиться', 4),
  singular1stPerson: Word('обучусь', 4),
  singular2ndPerson: Word('обучишься', 2),
  singular3rdPerson: Word('обучится', 2),
  plural1stPerson: Word('обучимся', 2),
  plural2ndPerson: Word('обучитесь', 2),
  plural3rdPerson: Word('обучатся', 2),
  masculinePast: Word('обучился', 4),
  femininePast: Word('обучилась', 4),
  neuterPast: Word('обучилось', 4),
  pluralPast: Word('обучились', 4),
  imperativeInformal: Word('обучись', 4),
  imperativeFormal: Word('обучитесь', 4),
  imperfect: [],
};

perfectVerbs.set(обучиться.name.text, обучиться);

export { обучиться };