import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбодриться: PerfectVerb = {
  name: Word('взбодриться', 6),
  singular1stPerson: Word('взбодрюсь', 6),
  singular2ndPerson: Word('взбодришься', 6),
  singular3rdPerson: Word('взбодрится', 6),
  plural1stPerson: Word('взбодримся', 6),
  plural2ndPerson: Word('взбодритесь', 6),
  plural3rdPerson: Word('взбодрятся', 6),
  masculinePast: Word('взбодрился', 6),
  femininePast: Word('взбодрилась', 6),
  neuterPast: Word('взбодрилось', 6),
  pluralPast: Word('взбодрились', 6),
  imperativeInformal: Word('взбодрись', 6),
  imperativeFormal: Word('взбодритесь', 6),
  imperfect: [],
};

perfectVerbs.set(взбодриться.name.text, взбодриться);

export { взбодриться };