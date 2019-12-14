import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстилать: PerfectVerb = {
  name: Word('выстилать', 6),
  singular1stPerson: Word('выстилаю', 6),
  singular2ndPerson: Word('выстилаешь', 6),
  singular3rdPerson: Word('выстилает', 6),
  plural1stPerson: Word('выстилаем', 6),
  plural2ndPerson: Word('выстилаете', 6),
  plural3rdPerson: Word('выстилают', 6),
  masculinePast: Word('выстилал', 6),
  femininePast: Word('выстилала', 6),
  neuterPast: Word('выстилало', 6),
  pluralPast: Word('выстилали', 6),
  imperativeInformal: Word('выстилай', 6),
  imperativeFormal: Word('выстилайте', 6),
  imperfect: [],
};

perfectVerbs.set(выстилать.name.text, выстилать);

export { выстилать };