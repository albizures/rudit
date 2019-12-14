import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стереться: PerfectVerb = {
  name: Word('стереться', 4),
  singular1stPerson: Word('сотрусь', 4),
  singular2ndPerson: Word('сотрёшься', 1),
  singular3rdPerson: Word('сотрётся', 1),
  plural1stPerson: Word('сотрёмся', 1),
  plural2ndPerson: Word('сотрётесь', 6),
  plural3rdPerson: Word('сотрутся', 4),
  masculinePast: Word('стёрся', 5),
  femininePast: Word('стёрлась', 5),
  neuterPast: Word('стёрлось', 5),
  pluralPast: Word('стёрлись', 5),
  imperativeInformal: Word('сотрись', 4),
  imperativeFormal: Word('сотритесь', 4),
  imperfect: [],
};

perfectVerbs.set(стереться.name.text, стереться);

export { стереться };