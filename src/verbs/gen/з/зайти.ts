import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зайти: PerfectVerb = {
  name: Word('зайти', 4),
  singular1stPerson: Word('зайду', 4),
  singular2ndPerson: Word('зайдёшь', 4),
  singular3rdPerson: Word('зайдёт', 4),
  plural1stPerson: Word('зайдём', 4),
  plural2ndPerson: Word('зайдёте', 4),
  plural3rdPerson: Word('зайдут', 4),
  masculinePast: Word('зашёл', 3),
  femininePast: Word('зашла', 4),
  neuterPast: Word('зашло', 4),
  pluralPast: Word('зашли', 4),
  imperativeInformal: Word('зайди', 4),
  imperativeFormal: Word('зайдите', 4),
  imperfect: ['заходить'],
};

perfectVerbs.set(зайти.name.text, зайти);

export { зайти };