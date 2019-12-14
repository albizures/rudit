import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лучиться: PerfectVerb = {
  name: Word('лучиться', 3),
  singular1stPerson: Word('лучусь', 3),
  singular2ndPerson: Word('лучишься', 3),
  singular3rdPerson: Word('лучится', 3),
  plural1stPerson: Word('лучимся', 3),
  plural2ndPerson: Word('лучитесь', 3),
  plural3rdPerson: Word('лучатся', 3),
  masculinePast: Word('лучился', 3),
  femininePast: Word('лучилась', 3),
  neuterPast: Word('лучилось', 3),
  pluralPast: Word('лучились', 3),
  imperativeInformal: Word('лучись', 3),
  imperativeFormal: Word('лучитесь', 3),
  imperfect: [],
};

perfectVerbs.set(лучиться.name.text, лучиться);

export { лучиться };