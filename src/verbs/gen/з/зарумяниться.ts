import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарумяниться: PerfectVerb = {
  name: Word('зарумяниться', 5),
  singular1stPerson: Word('зарумянюсь', 5),
  singular2ndPerson: Word('зарумянишься', 5),
  singular3rdPerson: Word('зарумянится', 5),
  plural1stPerson: Word('зарумянимся', 5),
  plural2ndPerson: Word('зарумянитесь', 5),
  plural3rdPerson: Word('зарумянятся', 5),
  masculinePast: Word('зарумянился', 5),
  femininePast: Word('зарумянилась', 5),
  neuterPast: Word('зарумянилось', 5),
  pluralPast: Word('зарумянились', 5),
  imperativeInformal: Word('зарумянься', 5),
  imperativeFormal: Word('зарумяньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зарумяниться.name.text, зарумяниться);

export { зарумяниться };