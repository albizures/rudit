import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доучиться: PerfectVerb = {
  name: Word('доучиться', 4),
  singular1stPerson: Word('доучусь', 4),
  singular2ndPerson: Word('доучишься', 2),
  singular3rdPerson: Word('доучится', 2),
  plural1stPerson: Word('доучимся', 2),
  plural2ndPerson: Word('доучитесь', 2),
  plural3rdPerson: Word('доучатся', 2),
  masculinePast: Word('доучился', 4),
  femininePast: Word('доучилась', 4),
  neuterPast: Word('доучилось', 4),
  pluralPast: Word('доучились', 4),
  imperativeInformal: Word('доучись', 4),
  imperativeFormal: Word('доучитесь', 4),
  imperfect: [],
};

perfectVerbs.set(доучиться.name.text, доучиться);

export { доучиться };