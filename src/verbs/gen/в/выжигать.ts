import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжигать: PerfectVerb = {
  name: Word('выжигать', 5),
  singular1stPerson: Word('выжигаю', 5),
  singular2ndPerson: Word('выжигаешь', 5),
  singular3rdPerson: Word('выжигает', 5),
  plural1stPerson: Word('выжигаем', 5),
  plural2ndPerson: Word('выжигаете', 5),
  plural3rdPerson: Word('выжигают', 5),
  masculinePast: Word('выжигал', 5),
  femininePast: Word('выжигала', 5),
  neuterPast: Word('выжигало', 5),
  pluralPast: Word('выжигали', 5),
  imperativeInformal: Word('выжигай', 5),
  imperativeFormal: Word('выжигайте', 5),
  imperfect: ['выжечь'],
};

perfectVerbs.set(выжигать.name.text, выжигать);

export { выжигать };