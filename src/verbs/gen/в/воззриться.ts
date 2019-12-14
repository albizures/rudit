import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воззриться: PerfectVerb = {
  name: Word('воззриться', 5),
  singular1stPerson: Word('воззрюсь', 5),
  singular2ndPerson: Word('воззришься', 5),
  singular3rdPerson: Word('воззрится', 5),
  plural1stPerson: Word('воззримся', 5),
  plural2ndPerson: Word('воззритесь', 5),
  plural3rdPerson: Word('воззрятся', 5),
  masculinePast: Word('воззрился', 5),
  femininePast: Word('воззрилась', 5),
  neuterPast: Word('воззрилось', 5),
  pluralPast: Word('воззрились', 5),
  imperativeInformal: Word('воззрись', 5),
  imperativeFormal: Word('воззритесь', 5),
  imperfect: [],
};

perfectVerbs.set(воззриться.name.text, воззриться);

export { воззриться };