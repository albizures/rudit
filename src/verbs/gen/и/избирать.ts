import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избирать: PerfectVerb = {
  name: Word('избирать', 5),
  singular1stPerson: Word('избираю', 5),
  singular2ndPerson: Word('избираешь', 5),
  singular3rdPerson: Word('избирает', 5),
  plural1stPerson: Word('избираем', 5),
  plural2ndPerson: Word('избираете', 5),
  plural3rdPerson: Word('избирают', 5),
  masculinePast: Word('избирал', 5),
  femininePast: Word('избирала', 5),
  neuterPast: Word('избирало', 5),
  pluralPast: Word('избирали', 5),
  imperativeInformal: Word('избирай', 5),
  imperativeFormal: Word('избирайте', 5),
  imperfect: ['избрать'],
};

perfectVerbs.set(избирать.name.text, избирать);

export { избирать };