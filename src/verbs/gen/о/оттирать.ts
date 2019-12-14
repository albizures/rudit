import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттирать: PerfectVerb = {
  name: Word('оттирать', 5),
  singular1stPerson: Word('оттираю', 5),
  singular2ndPerson: Word('оттираешь', 5),
  singular3rdPerson: Word('оттирает', 5),
  plural1stPerson: Word('оттираем', 5),
  plural2ndPerson: Word('оттираете', 5),
  plural3rdPerson: Word('оттирают', 5),
  masculinePast: Word('оттирал', 5),
  femininePast: Word('оттирала', 5),
  neuterPast: Word('оттирало', 5),
  pluralPast: Word('оттирали', 5),
  imperativeInformal: Word('оттирай', 5),
  imperativeFormal: Word('оттирайте', 5),
  imperfect: [],
};

perfectVerbs.set(оттирать.name.text, оттирать);

export { оттирать };