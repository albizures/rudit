import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утереться: PerfectVerb = {
  name: Word('утереться', 4),
  singular1stPerson: Word('утрусь', 3),
  singular2ndPerson: Word('утрёшься', 7),
  singular3rdPerson: Word('утрётся', 6),
  plural1stPerson: Word('утрёмся', 6),
  plural2ndPerson: Word('утрётесь', 5),
  plural3rdPerson: Word('утрутся', 3),
  masculinePast: Word('утёрся', 5),
  femininePast: Word('утёрлась', 5),
  neuterPast: Word('утёрлось', 5),
  pluralPast: Word('утёрлись', 5),
  imperativeInformal: Word('утрись', 3),
  imperativeFormal: Word('утритесь', 3),
  imperfect: [],
};

perfectVerbs.set(утереться.name.text, утереться);

export { утереться };