import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const топать: PerfectVerb = {
  name: Word('топать', 1),
  singular1stPerson: Word('топаю', 1),
  singular2ndPerson: Word('топаешь', 1),
  singular3rdPerson: Word('топает', 1),
  plural1stPerson: Word('топаем', 1),
  plural2ndPerson: Word('топаете', 1),
  plural3rdPerson: Word('топают', 1),
  masculinePast: Word('топал', 1),
  femininePast: Word('топала', 1),
  neuterPast: Word('топало', 1),
  pluralPast: Word('топали', 1),
  imperativeInformal: Word('топай', 1),
  imperativeFormal: Word('топайте', 1),
  imperfect: [],
};

perfectVerbs.set(топать.name.text, топать);

export { топать };