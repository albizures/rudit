import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтирать: PerfectVerb = {
  name: Word('обтирать', 5),
  singular1stPerson: Word('обтираю', 5),
  singular2ndPerson: Word('обтираешь', 5),
  singular3rdPerson: Word('обтирает', 5),
  plural1stPerson: Word('обтираем', 5),
  plural2ndPerson: Word('обтираете', 5),
  plural3rdPerson: Word('обтирают', 5),
  masculinePast: Word('обтирал', 5),
  femininePast: Word('обтирала', 5),
  neuterPast: Word('обтирало', 5),
  pluralPast: Word('обтирали', 5),
  imperativeInformal: Word('обтирай', 5),
  imperativeFormal: Word('обтирайте', 5),
  imperfect: [],
};

perfectVerbs.set(обтирать.name.text, обтирать);

export { обтирать };