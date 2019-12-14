import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наезжать: PerfectVerb = {
  name: Word('наезжать', 5),
  singular1stPerson: Word('наезжаю', 5),
  singular2ndPerson: Word('наезжаешь', 5),
  singular3rdPerson: Word('наезжает', 5),
  plural1stPerson: Word('наезжаем', 5),
  plural2ndPerson: Word('наезжаете', 5),
  plural3rdPerson: Word('наезжают', 5),
  masculinePast: Word('наезжал', 5),
  femininePast: Word('наезжала', 5),
  neuterPast: Word('наезжало', 5),
  pluralPast: Word('наезжали', 5),
  imperativeInformal: Word('наезжай', 5),
  imperativeFormal: Word('наезжайте', 5),
  imperfect: [],
};

perfectVerbs.set(наезжать.name.text, наезжать);

export { наезжать };