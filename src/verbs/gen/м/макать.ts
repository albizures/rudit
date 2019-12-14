import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const макать: PerfectVerb = {
  name: Word('макать', 3),
  singular1stPerson: Word('макаю', 3),
  singular2ndPerson: Word('макаешь', 3),
  singular3rdPerson: Word('макает', 3),
  plural1stPerson: Word('макаем', 3),
  plural2ndPerson: Word('макаете', 3),
  plural3rdPerson: Word('макают', 3),
  masculinePast: Word('макал', 3),
  femininePast: Word('макала', 3),
  neuterPast: Word('макало', 3),
  pluralPast: Word('макали', 3),
  imperativeInformal: Word('макай', 3),
  imperativeFormal: Word('макайте', 3),
  imperfect: [],
};

perfectVerbs.set(макать.name.text, макать);

export { макать };