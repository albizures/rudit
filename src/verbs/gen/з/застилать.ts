import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застилать: PerfectVerb = {
  name: Word('застилать', 6),
  singular1stPerson: Word('застилаю', 6),
  singular2ndPerson: Word('застилаешь', 6),
  singular3rdPerson: Word('застилает', 6),
  plural1stPerson: Word('застилаем', 6),
  plural2ndPerson: Word('застилаете', 6),
  plural3rdPerson: Word('застилают', 6),
  masculinePast: Word('застилал', 6),
  femininePast: Word('застилала', 6),
  neuterPast: Word('застилало', 6),
  pluralPast: Word('застилали', 6),
  imperativeInformal: Word('застилай', 6),
  imperativeFormal: Word('застилайте', 6),
  imperfect: [],
};

perfectVerbs.set(застилать.name.text, застилать);

export { застилать };