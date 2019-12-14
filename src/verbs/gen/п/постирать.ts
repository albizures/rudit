import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постирать: PerfectVerb = {
  name: Word('постирать', 6),
  singular1stPerson: Word('постираю', 6),
  singular2ndPerson: Word('постираешь', 6),
  singular3rdPerson: Word('постирает', 6),
  plural1stPerson: Word('постираем', 6),
  plural2ndPerson: Word('постираете', 6),
  plural3rdPerson: Word('постирают', 6),
  masculinePast: Word('постирал', 6),
  femininePast: Word('постирала', 6),
  neuterPast: Word('постирало', 6),
  pluralPast: Word('постирали', 6),
  imperativeInformal: Word('постирай', 6),
  imperativeFormal: Word('постирайте', 6),
  imperfect: ['стирать'],
};

perfectVerbs.set(постирать.name.text, постирать);

export { постирать };