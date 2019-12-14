import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откопать: PerfectVerb = {
  name: Word('откопать', 5),
  singular1stPerson: Word('откопаю', 5),
  singular2ndPerson: Word('откопаешь', 5),
  singular3rdPerson: Word('откопает', 5),
  plural1stPerson: Word('откопаем', 5),
  plural2ndPerson: Word('откопаете', 5),
  plural3rdPerson: Word('откопают', 5),
  masculinePast: Word('откопал', 5),
  femininePast: Word('откопала', 5),
  neuterPast: Word('откопало', 5),
  pluralPast: Word('откопали', 5),
  imperativeInformal: Word('откопай', 5),
  imperativeFormal: Word('откопайте', 5),
  imperfect: [],
};

perfectVerbs.set(откопать.name.text, откопать);

export { откопать };