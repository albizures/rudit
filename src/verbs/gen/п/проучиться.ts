import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проучиться: PerfectVerb = {
  name: Word('проучиться', 5),
  singular1stPerson: Word('проучусь', 5),
  singular2ndPerson: Word('проучишься', 3),
  singular3rdPerson: Word('проучится', 3),
  plural1stPerson: Word('проучимся', 3),
  plural2ndPerson: Word('проучитесь', 3),
  plural3rdPerson: Word('проучатся', 3),
  masculinePast: Word('проучился', 5),
  femininePast: Word('проучилась', 5),
  neuterPast: Word('проучилось', 5),
  pluralPast: Word('проучились', 5),
  imperativeInformal: Word('проучись', 5),
  imperativeFormal: Word('проучитесь', 5),
  imperfect: [],
};

perfectVerbs.set(проучиться.name.text, проучиться);

export { проучиться };