import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удирать: PerfectVerb = {
  name: Word('удирать', 4),
  singular1stPerson: Word('удираю', 4),
  singular2ndPerson: Word('удираешь', 4),
  singular3rdPerson: Word('удирает', 4),
  plural1stPerson: Word('удираем', 4),
  plural2ndPerson: Word('удираете', 4),
  plural3rdPerson: Word('удирают', 4),
  masculinePast: Word('удирал', 4),
  femininePast: Word('удирала', 4),
  neuterPast: Word('удирало', 4),
  pluralPast: Word('удирали', 4),
  imperativeInformal: Word('удирай', 4),
  imperativeFormal: Word('удирайте', 4),
  imperfect: ['удрать'],
};

perfectVerbs.set(удирать.name.text, удирать);

export { удирать };