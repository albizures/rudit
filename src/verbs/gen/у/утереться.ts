import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утереться: PerfectVerb = {
  name: Word('утереться', 4),
  singular1stPerson: Word('утрусь', 3),
  singular2ndPerson: Word('утрёшься', 3),
  singular3rdPerson: Word('утрётся', 3),
  plural1stPerson: Word('утрёмся', 3),
  plural2ndPerson: Word('утрётесь', 3),
  plural3rdPerson: Word('утрутся', 3),
  masculinePast: Word('утёрся', 2),
  femininePast: Word('утёрлась', 2),
  neuterPast: Word('утёрлось', 2),
  pluralPast: Word('утёрлись', 2),
  imperativeInformal: Word('утрись', 3),
  imperativeFormal: Word('утритесь', 3),
  imperfect: [],
};

perfectVerbs.set(утереться.name.text, утереться);

export { утереться };