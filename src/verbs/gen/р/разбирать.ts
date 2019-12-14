import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбирать: PerfectVerb = {
  name: Word('разбирать', 6),
  singular1stPerson: Word('разбираю', 6),
  singular2ndPerson: Word('разбираешь', 6),
  singular3rdPerson: Word('разбирает', 6),
  plural1stPerson: Word('разбираем', 6),
  plural2ndPerson: Word('разбираете', 6),
  plural3rdPerson: Word('разбирают', 6),
  masculinePast: Word('разбирал', 6),
  femininePast: Word('разбирала', 6),
  neuterPast: Word('разбирало', 6),
  pluralPast: Word('разбирали', 6),
  imperativeInformal: Word('разбирай', 6),
  imperativeFormal: Word('разбирайте', 6),
  imperfect: [],
};

perfectVerbs.set(разбирать.name.text, разбирать);

export { разбирать };