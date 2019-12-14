import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплотниться: PerfectVerb = {
  name: Word('уплотниться', 6),
  singular1stPerson: Word('уплотнюсь', 6),
  singular2ndPerson: Word('уплотнишься', 6),
  singular3rdPerson: Word('уплотнится', 6),
  plural1stPerson: Word('уплотнимся', 6),
  plural2ndPerson: Word('уплотнитесь', 6),
  plural3rdPerson: Word('уплотнятся', 6),
  masculinePast: Word('уплотнился', 6),
  femininePast: Word('уплотнилась', 6),
  neuterPast: Word('уплотнилось', 6),
  pluralPast: Word('уплотнились', 6),
  imperativeInformal: Word('уплотнись', 6),
  imperativeFormal: Word('уплотнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(уплотниться.name.text, уплотниться);

export { уплотниться };