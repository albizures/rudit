import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсидеться: PerfectVerb = {
  name: Word('отсидеться', 5),
  singular1stPerson: Word('отсижусь', 5),
  singular2ndPerson: Word('отсидишься', 5),
  singular3rdPerson: Word('отсидится', 5),
  plural1stPerson: Word('отсидимся', 5),
  plural2ndPerson: Word('отсидитесь', 5),
  plural3rdPerson: Word('отсидятся', 5),
  masculinePast: Word('отсиделся', 5),
  femininePast: Word('отсиделась', 5),
  neuterPast: Word('отсиделось', 5),
  pluralPast: Word('отсиделись', 5),
  imperativeInformal: Word('отсидись', 5),
  imperativeFormal: Word('отсидитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отсидеться.name.text, отсидеться);

export { отсидеться };