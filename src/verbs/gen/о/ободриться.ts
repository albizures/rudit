import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ободриться: PerfectVerb = {
  name: Word('ободриться', 5),
  singular1stPerson: Word('ободрюсь', 5),
  singular2ndPerson: Word('ободришься', 5),
  singular3rdPerson: Word('ободрится', 5),
  plural1stPerson: Word('ободримся', 5),
  plural2ndPerson: Word('ободритесь', 5),
  plural3rdPerson: Word('ободрятся', 5),
  masculinePast: Word('ободрился', 5),
  femininePast: Word('ободрилась', 5),
  neuterPast: Word('ободрилось', 5),
  pluralPast: Word('ободрились', 5),
  imperativeInformal: Word('ободрись', 5),
  imperativeFormal: Word('ободритесь', 5),
  imperfect: [],
};

perfectVerbs.set(ободриться.name.text, ободриться);

export { ободриться };