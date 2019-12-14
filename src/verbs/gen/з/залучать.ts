import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залучать: PerfectVerb = {
  name: Word('залучать', 5),
  singular1stPerson: Word('залучаю', 5),
  singular2ndPerson: Word('залучаешь', 5),
  singular3rdPerson: Word('залучает', 5),
  plural1stPerson: Word('залучаем', 5),
  plural2ndPerson: Word('залучаете', 5),
  plural3rdPerson: Word('залучают', 5),
  masculinePast: Word('залучал', 5),
  femininePast: Word('залучала', 5),
  neuterPast: Word('залучало', 5),
  pluralPast: Word('залучали', 5),
  imperativeInformal: Word('залучай', 5),
  imperativeFormal: Word('залучайте', 5),
  imperfect: [],
};

perfectVerbs.set(залучать.name.text, залучать);

export { залучать };