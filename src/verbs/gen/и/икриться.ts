import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const икриться: PerfectVerb = {
  name: Word('икриться', 3),
  singular1stPerson: Word('икрюсь', 3),
  singular2ndPerson: Word('икришься', 3),
  singular3rdPerson: Word('икрится', 3),
  plural1stPerson: Word('икримся', 3),
  plural2ndPerson: Word('икритесь', 3),
  plural3rdPerson: Word('икрятся', 3),
  masculinePast: Word('икрился', 3),
  femininePast: Word('икрилась', 3),
  neuterPast: Word('икрилось', 3),
  pluralPast: Word('икрились', 3),
  imperativeInformal: Word('икрись', 3),
  imperativeFormal: Word('икритесь', 3),
  imperfect: [],
};

perfectVerbs.set(икриться.name.text, икриться);

export { икриться };