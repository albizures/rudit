import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвихриться: PerfectVerb = {
  name: Word('взвихриться', 3),
  singular1stPerson: Word('взвихрюсь', 3),
  singular2ndPerson: Word('взвихришься', 3),
  singular3rdPerson: Word('взвихрится', 3),
  plural1stPerson: Word('взвихримся', 3),
  plural2ndPerson: Word('взвихритесь', 3),
  plural3rdPerson: Word('взвихрятся', 3),
  masculinePast: Word('взвихрился', 3),
  femininePast: Word('взвихрилась', 3),
  neuterPast: Word('взвихрилось', 3),
  pluralPast: Word('взвихрились', 3),
  imperativeInformal: Word('взвихрись', 3),
  imperativeFormal: Word('взвихритесь', 3),
  imperfect: [],
};

perfectVerbs.set(взвихриться.name.text, взвихриться);

export { взвихриться };