import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжирать: PerfectVerb = {
  name: Word('сжирать', 4),
  singular1stPerson: Word('сжираю', 4),
  singular2ndPerson: Word('сжираешь', 4),
  singular3rdPerson: Word('сжирает', 4),
  plural1stPerson: Word('сжираем', 4),
  plural2ndPerson: Word('сжираете', 4),
  plural3rdPerson: Word('сжирают', 4),
  masculinePast: Word('сжирал', 4),
  femininePast: Word('сжирала', 4),
  neuterPast: Word('сжирало', 4),
  pluralPast: Word('сжирали', 4),
  imperativeInformal: Word('сжирай', 4),
  imperativeFormal: Word('сжирайте', 4),
  imperfect: [],
};

perfectVerbs.set(сжирать.name.text, сжирать);

export { сжирать };