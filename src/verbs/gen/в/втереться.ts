import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втереться: PerfectVerb = {
  name: Word('втереться', 4),
  singular1stPerson: Word('вотрусь', 4),
  singular2ndPerson: Word('вотрёшься', 4),
  singular3rdPerson: Word('вотрётся', 4),
  plural1stPerson: Word('вотрёмся', 4),
  plural2ndPerson: Word('вотрётесь', 4),
  plural3rdPerson: Word('вотрутся', 4),
  masculinePast: Word('втёрся', 2),
  femininePast: Word('втёрлась', 2),
  neuterPast: Word('втёрлось', 2),
  pluralPast: Word('втёрлись', 2),
  imperativeInformal: Word('вотрись', 4),
  imperativeFormal: Word('вотритесь', 4),
  imperfect: [],
};

perfectVerbs.set(втереться.name.text, втереться);

export { втереться };