import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блюсти: PerfectVerb = {
  name: Word('блюсти', 5),
  singular1stPerson: Word('блюду', 4),
  singular2ndPerson: Word('блюдёшь', 4),
  singular3rdPerson: Word('блюдёт', 4),
  plural1stPerson: Word('блюдём', 4),
  plural2ndPerson: Word('блюдёте', 4),
  plural3rdPerson: Word('блюдут', 4),
  masculinePast: Word('блюл', 2),
  femininePast: Word('блюла', 4),
  neuterPast: Word('блюло', 4),
  pluralPast: Word('блюли', 4),
  imperativeInformal: Word('блюди', 4),
  imperativeFormal: Word('блюдите', 4),
  imperfect: [],
};

perfectVerbs.set(блюсти.name.text, блюсти);

export { блюсти };