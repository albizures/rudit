import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стирать: PerfectVerb = {
  name: Word('стирать', 4),
  singular1stPerson: Word('стираю', 4),
  singular2ndPerson: Word('стираешь', 4),
  singular3rdPerson: Word('стирает', 4),
  plural1stPerson: Word('стираем', 4),
  plural2ndPerson: Word('стираете', 4),
  plural3rdPerson: Word('стирают', 4),
  masculinePast: Word('стирал', 4),
  femininePast: Word('стирала', 4),
  neuterPast: Word('стирало', 4),
  pluralPast: Word('стирали', 4),
  imperativeInformal: Word('стирай', 4),
  imperativeFormal: Word('стирайте', 4),
  imperfect: ['стереть','постирать'],
};

perfectVerbs.set(стирать.name.text, стирать);

export { стирать };