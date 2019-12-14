import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допекать: PerfectVerb = {
  name: Word('допекать', 5),
  singular1stPerson: Word('допекаю', 5),
  singular2ndPerson: Word('допекаешь', 5),
  singular3rdPerson: Word('допекает', 5),
  plural1stPerson: Word('допекаем', 5),
  plural2ndPerson: Word('допекаете', 5),
  plural3rdPerson: Word('допекают', 5),
  masculinePast: Word('допекал', 5),
  femininePast: Word('допекала', 5),
  neuterPast: Word('допекало', 5),
  pluralPast: Word('допекали', 5),
  imperativeInformal: Word('допекай', 5),
  imperativeFormal: Word('допекайте', 5),
  imperfect: [],
};

perfectVerbs.set(допекать.name.text, допекать);

export { допекать };