import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересыхать: PerfectVerb = {
  name: Word('пересыхать', 7),
  singular1stPerson: Word('пересыхаю', 7),
  singular2ndPerson: Word('пересыхаешь', 7),
  singular3rdPerson: Word('пересыхает', 7),
  plural1stPerson: Word('пересыхаем', 7),
  plural2ndPerson: Word('пересыхаете', 7),
  plural3rdPerson: Word('пересыхают', 7),
  masculinePast: Word('пересыхал', 7),
  femininePast: Word('пересыхала', 7),
  neuterPast: Word('пересыхало', 7),
  pluralPast: Word('пересыхали', 7),
  imperativeInformal: Word('пересыхай', 7),
  imperativeFormal: Word('пересыхайте', 7),
  imperfect: [],
};

perfectVerbs.set(пересыхать.name.text, пересыхать);

export { пересыхать };