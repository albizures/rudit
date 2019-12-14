import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отучиться: PerfectVerb = {
  name: Word('отучиться', 4),
  singular1stPerson: Word('отучусь', 4),
  singular2ndPerson: Word('отучишься', 2),
  singular3rdPerson: Word('отучится', 2),
  plural1stPerson: Word('отучимся', 2),
  plural2ndPerson: Word('отучитесь', 2),
  plural3rdPerson: Word('отучатся', 2),
  masculinePast: Word('отучился', 4),
  femininePast: Word('отучилась', 4),
  neuterPast: Word('отучилось', 4),
  pluralPast: Word('отучились', 4),
  imperativeInformal: Word('отучись', 4),
  imperativeFormal: Word('отучитесь', 4),
  imperfect: [],
};

perfectVerbs.set(отучиться.name.text, отучиться);

export { отучиться };