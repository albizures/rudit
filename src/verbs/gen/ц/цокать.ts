import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цокать: PerfectVerb = {
  name: Word('цокать', 1),
  singular1stPerson: Word('цокаю', 1),
  singular2ndPerson: Word('цокаешь', 1),
  singular3rdPerson: Word('цокает', 1),
  plural1stPerson: Word('цокаем', 1),
  plural2ndPerson: Word('цокаете', 1),
  plural3rdPerson: Word('цокают', 1),
  masculinePast: Word('цокал', 1),
  femininePast: Word('цокала', 1),
  neuterPast: Word('цокало', 1),
  pluralPast: Word('цокали', 1),
  imperativeInformal: Word('цокай', 1),
  imperativeFormal: Word('цокайте', 1),
  imperfect: [],
};

perfectVerbs.set(цокать.name.text, цокать);

export { цокать };