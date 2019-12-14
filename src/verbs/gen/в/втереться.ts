import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втереться: PerfectVerb = {
  name: Word('втереться', 4),
  singular1stPerson: Word('вотрусь', 4),
  singular2ndPerson: Word('вотрёшься', 1),
  singular3rdPerson: Word('вотрётся', 1),
  plural1stPerson: Word('вотрёмся', 1),
  plural2ndPerson: Word('вотрётесь', 6),
  plural3rdPerson: Word('вотрутся', 4),
  masculinePast: Word('втёрся', 5),
  femininePast: Word('втёрлась', 5),
  neuterPast: Word('втёрлось', 5),
  pluralPast: Word('втёрлись', 5),
  imperativeInformal: Word('вотрись', 4),
  imperativeFormal: Word('вотритесь', 4),
  imperfect: [],
};

perfectVerbs.set(втереться.name.text, втереться);

export { втереться };