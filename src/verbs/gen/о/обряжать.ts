import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обряжать: PerfectVerb = {
  name: Word('обряжать', 5),
  singular1stPerson: Word('обряжаю', 5),
  singular2ndPerson: Word('обряжаешь', 5),
  singular3rdPerson: Word('обряжает', 5),
  plural1stPerson: Word('обряжаем', 5),
  plural2ndPerson: Word('обряжаете', 5),
  plural3rdPerson: Word('обряжают', 5),
  masculinePast: Word('обряжал', 5),
  femininePast: Word('обряжала', 5),
  neuterPast: Word('обряжало', 5),
  pluralPast: Word('обряжали', 5),
  imperativeInformal: Word('обряжай', 5),
  imperativeFormal: Word('обряжайте', 5),
  imperfect: [],
};

perfectVerbs.set(обряжать.name.text, обряжать);

export { обряжать };