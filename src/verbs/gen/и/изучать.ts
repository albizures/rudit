import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изучать: PerfectVerb = {
  name: Word('изучать', 4),
  singular1stPerson: Word('изучаю', 4),
  singular2ndPerson: Word('изучаешь', 4),
  singular3rdPerson: Word('изучает', 4),
  plural1stPerson: Word('изучаем', 4),
  plural2ndPerson: Word('изучаете', 4),
  plural3rdPerson: Word('изучают', 4),
  masculinePast: Word('изучал', 4),
  femininePast: Word('изучала', 4),
  neuterPast: Word('изучало', 4),
  pluralPast: Word('изучали', 4),
  imperativeInformal: Word('изучай', 4),
  imperativeFormal: Word('изучайте', 4),
  imperfect: ['изучить'],
};

perfectVerbs.set(изучать.name.text, изучать);

export { изучать };