import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принимать: PerfectVerb = {
  name: Word('принимать', 6),
  singular1stPerson: Word('принимаю', 6),
  singular2ndPerson: Word('принимаешь', 6),
  singular3rdPerson: Word('принимает', 6),
  plural1stPerson: Word('принимаем', 6),
  plural2ndPerson: Word('принимаете', 6),
  plural3rdPerson: Word('принимают', 6),
  masculinePast: Word('принимал', 6),
  femininePast: Word('принимала', 6),
  neuterPast: Word('принимало', 6),
  pluralPast: Word('принимали', 6),
  imperativeInformal: Word('принимай', 6),
  imperativeFormal: Word('принимайте', 6),
  imperfect: ['принять'],
};

perfectVerbs.set(принимать.name.text, принимать);

export { принимать };