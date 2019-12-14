import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бодриться: PerfectVerb = {
  name: Word('бодриться', 4),
  singular1stPerson: Word('бодрюсь', 4),
  singular2ndPerson: Word('бодришься', 4),
  singular3rdPerson: Word('бодрится', 4),
  plural1stPerson: Word('бодримся', 4),
  plural2ndPerson: Word('бодритесь', 4),
  plural3rdPerson: Word('бодрятся', 4),
  masculinePast: Word('бодрился', 4),
  femininePast: Word('бодрилась', 4),
  neuterPast: Word('бодрилось', 4),
  pluralPast: Word('бодрились', 4),
  imperativeInformal: Word('бодрись', 4),
  imperativeFormal: Word('бодритесь', 4),
  imperfect: [],
};

perfectVerbs.set(бодриться.name.text, бодриться);

export { бодриться };