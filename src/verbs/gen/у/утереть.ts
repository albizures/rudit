import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утереть: PerfectVerb = {
  name: Word('утереть', 4),
  singular1stPerson: Word('утру', 3),
  singular2ndPerson: Word('утрёшь', 3),
  singular3rdPerson: Word('утрёт', 3),
  plural1stPerson: Word('утрём', 3),
  plural2ndPerson: Word('утрёте', 3),
  plural3rdPerson: Word('утрут', 3),
  masculinePast: Word('утёр', 2),
  femininePast: Word('утёрла', 2),
  neuterPast: Word('утёрло', 2),
  pluralPast: Word('утёрли', 2),
  imperativeInformal: Word('утри', 3),
  imperativeFormal: Word('утрите', 3),
  imperfect: [],
};

perfectVerbs.set(утереть.name.text, утереть);

export { утереть };