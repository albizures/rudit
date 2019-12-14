import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присыхать: PerfectVerb = {
  name: Word('присыхать', 6),
  singular1stPerson: Word('присыхаю', 6),
  singular2ndPerson: Word('присыхаешь', 6),
  singular3rdPerson: Word('присыхает', 6),
  plural1stPerson: Word('присыхаем', 6),
  plural2ndPerson: Word('присыхаете', 6),
  plural3rdPerson: Word('присыхают', 6),
  masculinePast: Word('присыхал', 6),
  femininePast: Word('присыхала', 6),
  neuterPast: Word('присыхало', 6),
  pluralPast: Word('присыхали', 6),
  imperativeInformal: Word('присыхай', 6),
  imperativeFormal: Word('присыхайте', 6),
  imperfect: [],
};

perfectVerbs.set(присыхать.name.text, присыхать);

export { присыхать };