import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарумяниться: PerfectVerb = {
  name: Word('нарумяниться', 5),
  singular1stPerson: Word('нарумянюсь', 5),
  singular2ndPerson: Word('нарумянишься', 5),
  singular3rdPerson: Word('нарумянится', 5),
  plural1stPerson: Word('нарумянимся', 5),
  plural2ndPerson: Word('нарумянитесь', 5),
  plural3rdPerson: Word('нарумянятся', 5),
  masculinePast: Word('нарумянился', 5),
  femininePast: Word('нарумянилась', 5),
  neuterPast: Word('нарумянилось', 5),
  pluralPast: Word('нарумянились', 5),
  imperativeInformal: Word('нарумянься', 5),
  imperativeFormal: Word('нарумяньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(нарумяниться.name.text, нарумяниться);

export { нарумяниться };