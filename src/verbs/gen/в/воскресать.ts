import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воскресать: PerfectVerb = {
  name: Word('воскресать', 7),
  singular1stPerson: Word('воскресаю', 7),
  singular2ndPerson: Word('воскресаешь', 7),
  singular3rdPerson: Word('воскресает', 7),
  plural1stPerson: Word('воскресаем', 7),
  plural2ndPerson: Word('воскресаете', 7),
  plural3rdPerson: Word('воскресают', 7),
  masculinePast: Word('воскресал', 7),
  femininePast: Word('воскресала', 7),
  neuterPast: Word('воскресало', 7),
  pluralPast: Word('воскресали', 7),
  imperativeInformal: Word('воскресай', 7),
  imperativeFormal: Word('воскресайте', 7),
  imperfect: [],
};

perfectVerbs.set(воскресать.name.text, воскресать);

export { воскресать };