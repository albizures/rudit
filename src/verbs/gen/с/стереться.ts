import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стереться: PerfectVerb = {
  name: Word('стереться', 4),
  singular1stPerson: Word('сотрусь', 4),
  singular2ndPerson: Word('сотрёшься', 4),
  singular3rdPerson: Word('сотрётся', 4),
  plural1stPerson: Word('сотрёмся', 4),
  plural2ndPerson: Word('сотрётесь', 4),
  plural3rdPerson: Word('сотрутся', 4),
  masculinePast: Word('стёрся', 2),
  femininePast: Word('стёрлась', 2),
  neuterPast: Word('стёрлось', 2),
  pluralPast: Word('стёрлись', 2),
  imperativeInformal: Word('сотрись', 4),
  imperativeFormal: Word('сотритесь', 4),
  imperfect: [],
};

perfectVerbs.set(стереться.name.text, стереться);

export { стереться };