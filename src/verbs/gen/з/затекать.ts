import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затекать: PerfectVerb = {
  name: Word('затекать', 5),
  singular1stPerson: Word('затекаю', 5),
  singular2ndPerson: Word('затекаешь', 5),
  singular3rdPerson: Word('затекает', 5),
  plural1stPerson: Word('затекаем', 5),
  plural2ndPerson: Word('затекаете', 5),
  plural3rdPerson: Word('затекают', 5),
  masculinePast: Word('затекал', 5),
  femininePast: Word('затекала', 5),
  neuterPast: Word('затекало', 5),
  pluralPast: Word('затекали', 5),
  imperativeInformal: Word('затекай', 5),
  imperativeFormal: Word('затекайте', 5),
  imperfect: [],
};

perfectVerbs.set(затекать.name.text, затекать);

export { затекать };