import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утереть: PerfectVerb = {
  name: Word('утереть', 4),
  singular1stPerson: Word('утру', 3),
  singular2ndPerson: Word('утрёшь', 0),
  singular3rdPerson: Word('утрёт', 0),
  plural1stPerson: Word('утрём', 0),
  plural2ndPerson: Word('утрёте', 5),
  plural3rdPerson: Word('утрут', 3),
  masculinePast: Word('утёр', 0),
  femininePast: Word('утёрла', 5),
  neuterPast: Word('утёрло', 5),
  pluralPast: Word('утёрли', 5),
  imperativeInformal: Word('утри', 3),
  imperativeFormal: Word('утрите', 3),
  imperfect: [],
};

perfectVerbs.set(утереть.name.text, утереть);

export { утереть };