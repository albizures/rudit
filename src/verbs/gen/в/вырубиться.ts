import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырубиться: PerfectVerb = {
  name: Word('вырубиться', 1),
  singular1stPerson: Word('вырублюсь', 1),
  singular2ndPerson: Word('вырубишься', 1),
  singular3rdPerson: Word('вырубится', 1),
  plural1stPerson: Word('вырубимся', 1),
  plural2ndPerson: Word('вырубитесь', 1),
  plural3rdPerson: Word('вырубятся', 1),
  masculinePast: Word('вырубился', 1),
  femininePast: Word('вырубилась', 1),
  neuterPast: Word('вырубилось', 1),
  pluralPast: Word('вырубились', 1),
  imperativeInformal: Word('вырубись', 1),
  imperativeFormal: Word('вырубитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вырубиться.name.text, вырубиться);

export { вырубиться };