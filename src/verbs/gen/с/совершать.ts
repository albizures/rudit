import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совершать: PerfectVerb = {
  name: Word('совершать', 6),
  singular1stPerson: Word('совершаю', 6),
  singular2ndPerson: Word('совершаешь', 6),
  singular3rdPerson: Word('совершает', 6),
  plural1stPerson: Word('совершаем', 6),
  plural2ndPerson: Word('совершаете', 6),
  plural3rdPerson: Word('совершают', 6),
  masculinePast: Word('совершал', 6),
  femininePast: Word('совершала', 6),
  neuterPast: Word('совершало', 6),
  pluralPast: Word('совершали', 6),
  imperativeInformal: Word('совершай', 6),
  imperativeFormal: Word('совершайте', 6),
  imperfect: ['совершить'],
};

perfectVerbs.set(совершать.name.text, совершать);

export { совершать };