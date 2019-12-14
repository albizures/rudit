import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const найти: PerfectVerb = {
  name: Word('найти', 4),
  singular1stPerson: Word('найду', 4),
  singular2ndPerson: Word('найдёшь', 4),
  singular3rdPerson: Word('найдёт', 4),
  plural1stPerson: Word('найдём', 4),
  plural2ndPerson: Word('найдёте', 4),
  plural3rdPerson: Word('найдут', 4),
  masculinePast: Word('нашёл', 3),
  femininePast: Word('нашла', 4),
  neuterPast: Word('нашло', 4),
  pluralPast: Word('нашли', 4),
  imperativeInformal: Word('найди', 4),
  imperativeFormal: Word('найдите', 4),
  imperfect: ['находить'],
};

perfectVerbs.set(найти.name.text, найти);

export { найти };