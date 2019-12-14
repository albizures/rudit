import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взгромоздиться: PerfectVerb = {
  name: Word('взгромоздиться', 9),
  singular1stPerson: Word('взгромозжусь', 9),
  singular2ndPerson: Word('взгромоздишься', 9),
  singular3rdPerson: Word('взгромоздится', 9),
  plural1stPerson: Word('взгромоздимся', 9),
  plural2ndPerson: Word('взгромоздитесь', 9),
  plural3rdPerson: Word('взгромоздятся', 9),
  masculinePast: Word('взгромоздился', 9),
  femininePast: Word('взгромоздилась', 9),
  neuterPast: Word('взгромоздилось', 9),
  pluralPast: Word('взгромоздились', 9),
  imperativeInformal: Word('взгромоздись', 9),
  imperativeFormal: Word('взгромоздитесь', 9),
  imperfect: [],
};

perfectVerbs.set(взгромоздиться.name.text, взгромоздиться);

export { взгромоздиться };