import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстилать: PerfectVerb = {
  name: Word('расстилать', 7),
  singular1stPerson: Word('расстилаю', 7),
  singular2ndPerson: Word('расстилаешь', 7),
  singular3rdPerson: Word('расстилает', 7),
  plural1stPerson: Word('расстилаем', 7),
  plural2ndPerson: Word('расстилаете', 7),
  plural3rdPerson: Word('расстилают', 7),
  masculinePast: Word('расстилал', 7),
  femininePast: Word('расстилала', 7),
  neuterPast: Word('расстилало', 7),
  pluralPast: Word('расстилали', 7),
  imperativeInformal: Word('расстилай', 7),
  imperativeFormal: Word('расстилайте', 7),
  imperfect: [],
};

perfectVerbs.set(расстилать.name.text, расстилать);

export { расстилать };