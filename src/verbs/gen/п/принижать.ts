import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принижать: PerfectVerb = {
  name: Word('принижать', 6),
  singular1stPerson: Word('принижаю', 6),
  singular2ndPerson: Word('принижаешь', 6),
  singular3rdPerson: Word('принижает', 6),
  plural1stPerson: Word('принижаем', 6),
  plural2ndPerson: Word('принижаете', 6),
  plural3rdPerson: Word('принижают', 6),
  masculinePast: Word('принижал', 6),
  femininePast: Word('принижала', 6),
  neuterPast: Word('принижало', 6),
  pluralPast: Word('принижали', 6),
  imperativeInformal: Word('принижай', 6),
  imperativeFormal: Word('принижайте', 6),
  imperfect: [],
};

perfectVerbs.set(принижать.name.text, принижать);

export { принижать };