import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присыпать: PerfectVerb = {
  name: Word('присыпать', 6),
  singular1stPerson: Word('присыпаю', 6),
  singular2ndPerson: Word('присыпаешь', 6),
  singular3rdPerson: Word('присыпает', 6),
  plural1stPerson: Word('присыпаем', 6),
  plural2ndPerson: Word('присыпаете', 6),
  plural3rdPerson: Word('присыпают', 6),
  masculinePast: Word('присыпал', 6),
  femininePast: Word('присыпала', 6),
  neuterPast: Word('присыпало', 6),
  pluralPast: Word('присыпали', 6),
  imperativeInformal: Word('присыпай', 6),
  imperativeFormal: Word('присыпайте', 6),
  imperfect: [],
};

perfectVerbs.set(присыпать.name.text, присыпать);

export { присыпать };