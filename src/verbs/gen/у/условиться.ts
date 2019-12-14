import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const условиться: PerfectVerb = {
  name: Word('условиться', 3),
  singular1stPerson: Word('условлюсь', 3),
  singular2ndPerson: Word('условишься', 3),
  singular3rdPerson: Word('условится', 3),
  plural1stPerson: Word('условимся', 3),
  plural2ndPerson: Word('условитесь', 3),
  plural3rdPerson: Word('условятся', 3),
  masculinePast: Word('условился', 3),
  femininePast: Word('условилась', 3),
  neuterPast: Word('условилось', 3),
  pluralPast: Word('условились', 3),
  imperativeInformal: Word('условься', 3),
  imperativeFormal: Word('условьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(условиться.name.text, условиться);

export { условиться };