import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстилать: PerfectVerb = {
  name: Word('подстилать', 7),
  singular1stPerson: Word('подстилаю', 7),
  singular2ndPerson: Word('подстилаешь', 7),
  singular3rdPerson: Word('подстилает', 7),
  plural1stPerson: Word('подстилаем', 7),
  plural2ndPerson: Word('подстилаете', 7),
  plural3rdPerson: Word('подстилают', 7),
  masculinePast: Word('подстилал', 7),
  femininePast: Word('подстилала', 7),
  neuterPast: Word('подстилало', 7),
  pluralPast: Word('подстилали', 7),
  imperativeInformal: Word('подстилай', 7),
  imperativeFormal: Word('подстилайте', 7),
  imperfect: [],
};

perfectVerbs.set(подстилать.name.text, подстилать);

export { подстилать };