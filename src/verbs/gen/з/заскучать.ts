import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскучать: PerfectVerb = {
  name: Word('заскучать', 6),
  singular1stPerson: Word('заскучаю', 6),
  singular2ndPerson: Word('заскучаешь', 6),
  singular3rdPerson: Word('заскучает', 6),
  plural1stPerson: Word('заскучаем', 6),
  plural2ndPerson: Word('заскучаете', 6),
  plural3rdPerson: Word('заскучают', 6),
  masculinePast: Word('заскучал', 6),
  femininePast: Word('заскучала', 6),
  neuterPast: Word('заскучало', 6),
  pluralPast: Word('заскучали', 6),
  imperativeInformal: Word('заскучай', 6),
  imperativeFormal: Word('заскучайте', 6),
  imperfect: [],
};

perfectVerbs.set(заскучать.name.text, заскучать);

export { заскучать };