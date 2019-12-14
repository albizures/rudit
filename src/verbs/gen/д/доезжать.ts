import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доезжать: PerfectVerb = {
  name: Word('доезжать', 5),
  singular1stPerson: Word('доезжаю', 5),
  singular2ndPerson: Word('доезжаешь', 5),
  singular3rdPerson: Word('доезжает', 5),
  plural1stPerson: Word('доезжаем', 5),
  plural2ndPerson: Word('доезжаете', 5),
  plural3rdPerson: Word('доезжают', 5),
  masculinePast: Word('доезжал', 5),
  femininePast: Word('доезжала', 5),
  neuterPast: Word('доезжало', 5),
  pluralPast: Word('доезжали', 5),
  imperativeInformal: Word('доезжай', 5),
  imperativeFormal: Word('доезжайте', 5),
  imperfect: [],
};

perfectVerbs.set(доезжать.name.text, доезжать);

export { доезжать };