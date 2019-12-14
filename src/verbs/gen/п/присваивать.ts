import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присваивать: PerfectVerb = {
  name: Word('присваивать', 5),
  singular1stPerson: Word('присваиваю', 5),
  singular2ndPerson: Word('присваиваешь', 5),
  singular3rdPerson: Word('присваивает', 5),
  plural1stPerson: Word('присваиваем', 5),
  plural2ndPerson: Word('присваиваете', 5),
  plural3rdPerson: Word('присваивают', 5),
  masculinePast: Word('присваивал', 5),
  femininePast: Word('присваивала', 5),
  neuterPast: Word('присваивало', 5),
  pluralPast: Word('присваивали', 5),
  imperativeInformal: Word('присваивай', 5),
  imperativeFormal: Word('присваивайте', 5),
  imperfect: [],
};

perfectVerbs.set(присваивать.name.text, присваивать);

export { присваивать };