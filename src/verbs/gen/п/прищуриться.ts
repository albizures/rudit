import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прищуриться: PerfectVerb = {
  name: Word('прищуриться', 4),
  singular1stPerson: Word('прищурюсь', 4),
  singular2ndPerson: Word('прищуришься', 4),
  singular3rdPerson: Word('прищурится', 4),
  plural1stPerson: Word('прищуримся', 4),
  plural2ndPerson: Word('прищуритесь', 4),
  plural3rdPerson: Word('прищурятся', 4),
  masculinePast: Word('прищурился', 4),
  femininePast: Word('прищурилась', 4),
  neuterPast: Word('прищурилось', 4),
  pluralPast: Word('прищурились', 4),
  imperativeInformal: Word('прищурься', 4),
  imperativeFormal: Word('прищурьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прищуриться.name.text, прищуриться);

export { прищуриться };