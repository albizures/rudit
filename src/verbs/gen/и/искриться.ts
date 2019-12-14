import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искриться: PerfectVerb = {
  name: Word('искриться', 0),
  singular1stPerson: Word('искрюсь', 0),
  singular2ndPerson: Word('искришься', 0),
  singular3rdPerson: Word('искрится', 0),
  plural1stPerson: Word('искримся', 0),
  plural2ndPerson: Word('искритесь', 0),
  plural3rdPerson: Word('искрятся', 0),
  masculinePast: Word('искрился', 0),
  femininePast: Word('искрилась', 0),
  neuterPast: Word('искрилось', 0),
  pluralPast: Word('искрились', 0),
  imperativeInformal: Word('искрись', 0),
  imperativeFormal: Word('искритесь', 0),
  imperfect: [],
};

perfectVerbs.set(искриться.name.text, искриться);

export { искриться };