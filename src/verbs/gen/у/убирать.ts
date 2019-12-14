import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убирать: PerfectVerb = {
  name: Word('убирать', 4),
  singular1stPerson: Word('убираю', 4),
  singular2ndPerson: Word('убираешь', 4),
  singular3rdPerson: Word('убирает', 4),
  plural1stPerson: Word('убираем', 4),
  plural2ndPerson: Word('убираете', 4),
  plural3rdPerson: Word('убирают', 4),
  masculinePast: Word('убирал', 4),
  femininePast: Word('убирала', 4),
  neuterPast: Word('убирало', 4),
  pluralPast: Word('убирали', 4),
  imperativeInformal: Word('убирай', 4),
  imperativeFormal: Word('убирайте', 4),
  imperfect: ['убрать'],
};

perfectVerbs.set(убирать.name.text, убирать);

export { убирать };