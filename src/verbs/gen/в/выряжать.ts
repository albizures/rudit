import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выряжать: PerfectVerb = {
  name: Word('выряжать', 5),
  singular1stPerson: Word('выряжаю', 5),
  singular2ndPerson: Word('выряжаешь', 5),
  singular3rdPerson: Word('выряжает', 5),
  plural1stPerson: Word('выряжаем', 5),
  plural2ndPerson: Word('выряжаете', 5),
  plural3rdPerson: Word('выряжают', 5),
  masculinePast: Word('выряжал', 5),
  femininePast: Word('выряжала', 5),
  neuterPast: Word('выряжало', 5),
  pluralPast: Word('выряжали', 5),
  imperativeInformal: Word('выряжай', 5),
  imperativeFormal: Word('выряжайте', 5),
  imperfect: [],
};

perfectVerbs.set(выряжать.name.text, выряжать);

export { выряжать };