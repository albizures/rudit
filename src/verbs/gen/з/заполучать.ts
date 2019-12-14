import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполучать: PerfectVerb = {
  name: Word('заполучать', 7),
  singular1stPerson: Word('заполучаю', 7),
  singular2ndPerson: Word('заполучаешь', 7),
  singular3rdPerson: Word('заполучает', 7),
  plural1stPerson: Word('заполучаем', 7),
  plural2ndPerson: Word('заполучаете', 7),
  plural3rdPerson: Word('заполучают', 7),
  masculinePast: Word('заполучал', 7),
  femininePast: Word('заполучала', 7),
  neuterPast: Word('заполучало', 7),
  pluralPast: Word('заполучали', 7),
  imperativeInformal: Word('заполучай', 7),
  imperativeFormal: Word('заполучайте', 7),
  imperfect: [],
};

perfectVerbs.set(заполучать.name.text, заполучать);

export { заполучать };