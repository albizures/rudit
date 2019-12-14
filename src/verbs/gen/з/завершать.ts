import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завершать: PerfectVerb = {
  name: Word('завершать', 6),
  singular1stPerson: Word('завершаю', 6),
  singular2ndPerson: Word('завершаешь', 6),
  singular3rdPerson: Word('завершает', 6),
  plural1stPerson: Word('завершаем', 6),
  plural2ndPerson: Word('завершаете', 6),
  plural3rdPerson: Word('завершают', 6),
  masculinePast: Word('завершал', 6),
  femininePast: Word('завершала', 6),
  neuterPast: Word('завершало', 6),
  pluralPast: Word('завершали', 6),
  imperativeInformal: Word('завершай', 6),
  imperativeFormal: Word('завершайте', 6),
  imperfect: ['завершить'],
};

perfectVerbs.set(завершать.name.text, завершать);

export { завершать };