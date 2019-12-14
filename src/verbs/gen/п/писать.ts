import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const писать: PerfectVerb = {
  name: Word('писать', 1),
  singular1stPerson: Word('пишу', 1),
  singular2ndPerson: Word('пишешь', 3),
  singular3rdPerson: Word('пишет', 3),
  plural1stPerson: Word('пишем', 3),
  plural2ndPerson: Word('пишете', 3),
  plural3rdPerson: Word('пишут', 1),
  masculinePast: Word('писал', 1),
  femininePast: Word('писала', 1),
  neuterPast: Word('писало', 1),
  pluralPast: Word('писали', 1),
  imperativeInformal: Word('писай', 1),
  imperativeFormal: Word('писайте', 1),
  imperfect: ['пописать'],
};

perfectVerbs.set(писать.name.text, писать);

export { писать };