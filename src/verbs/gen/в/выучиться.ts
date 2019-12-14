import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выучиться: PerfectVerb = {
  name: Word('выучиться', 1),
  singular1stPerson: Word('выучусь', 1),
  singular2ndPerson: Word('выучишься', 1),
  singular3rdPerson: Word('выучится', 1),
  plural1stPerson: Word('выучимся', 1),
  plural2ndPerson: Word('выучитесь', 1),
  plural3rdPerson: Word('выучатся', 1),
  masculinePast: Word('выучился', 1),
  femininePast: Word('выучилась', 1),
  neuterPast: Word('выучилось', 1),
  pluralPast: Word('выучились', 1),
  imperativeInformal: Word('выучись', 1),
  imperativeFormal: Word('выучитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выучиться.name.text, выучиться);

export { выучиться };