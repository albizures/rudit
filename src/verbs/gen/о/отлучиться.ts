import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлучиться: PerfectVerb = {
  name: Word('отлучиться', 5),
  singular1stPerson: Word('отлучусь', 5),
  singular2ndPerson: Word('отлучишься', 5),
  singular3rdPerson: Word('отлучится', 5),
  plural1stPerson: Word('отлучимся', 5),
  plural2ndPerson: Word('отлучитесь', 5),
  plural3rdPerson: Word('отлучатся', 5),
  masculinePast: Word('отлучился', 5),
  femininePast: Word('отлучилась', 5),
  neuterPast: Word('отлучилось', 5),
  pluralPast: Word('отлучились', 5),
  imperativeInformal: Word('отлучись', 5),
  imperativeFormal: Word('отлучитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отлучиться.name.text, отлучиться);

export { отлучиться };