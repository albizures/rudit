import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принуждать: PerfectVerb = {
  name: Word('принуждать', 7),
  singular1stPerson: Word('принуждаю', 7),
  singular2ndPerson: Word('принуждаешь', 7),
  singular3rdPerson: Word('принуждает', 7),
  plural1stPerson: Word('принуждаем', 7),
  plural2ndPerson: Word('принуждаете', 7),
  plural3rdPerson: Word('принуждают', 7),
  masculinePast: Word('принуждал', 7),
  femininePast: Word('принуждала', 7),
  neuterPast: Word('принуждало', 7),
  pluralPast: Word('принуждали', 7),
  imperativeInformal: Word('принуждай', 7),
  imperativeFormal: Word('принуждайте', 7),
  imperfect: [],
};

perfectVerbs.set(принуждать.name.text, принуждать);

export { принуждать };