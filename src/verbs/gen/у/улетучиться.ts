import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улетучиться: PerfectVerb = {
  name: Word('улетучиться', 4),
  singular1stPerson: Word('улетучусь', 4),
  singular2ndPerson: Word('улетучишься', 4),
  singular3rdPerson: Word('улетучится', 4),
  plural1stPerson: Word('улетучимся', 4),
  plural2ndPerson: Word('улетучитесь', 4),
  plural3rdPerson: Word('улетучатся', 4),
  masculinePast: Word('улетучился', 4),
  femininePast: Word('улетучилась', 4),
  neuterPast: Word('улетучилось', 4),
  pluralPast: Word('улетучились', 4),
  imperativeInformal: Word('улетучься', 4),
  imperativeFormal: Word('улетучьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(улетучиться.name.text, улетучиться);

export { улетучиться };