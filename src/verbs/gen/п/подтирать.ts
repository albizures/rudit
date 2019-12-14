import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтирать: PerfectVerb = {
  name: Word('подтирать', 6),
  singular1stPerson: Word('подтираю', 6),
  singular2ndPerson: Word('подтираешь', 6),
  singular3rdPerson: Word('подтирает', 6),
  plural1stPerson: Word('подтираем', 6),
  plural2ndPerson: Word('подтираете', 6),
  plural3rdPerson: Word('подтирают', 6),
  masculinePast: Word('подтирал', 6),
  femininePast: Word('подтирала', 6),
  neuterPast: Word('подтирало', 6),
  pluralPast: Word('подтирали', 6),
  imperativeInformal: Word('подтирай', 6),
  imperativeFormal: Word('подтирайте', 6),
  imperfect: [],
};

perfectVerbs.set(подтирать.name.text, подтирать);

export { подтирать };