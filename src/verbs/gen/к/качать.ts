import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const качать: PerfectVerb = {
  name: Word('качать', 3),
  singular1stPerson: Word('качаю', 3),
  singular2ndPerson: Word('качаешь', 3),
  singular3rdPerson: Word('качает', 3),
  plural1stPerson: Word('качаем', 3),
  plural2ndPerson: Word('качаете', 3),
  plural3rdPerson: Word('качают', 3),
  masculinePast: Word('качал', 3),
  femininePast: Word('качала', 3),
  neuterPast: Word('качало', 3),
  pluralPast: Word('качали', 3),
  imperativeInformal: Word('качай', 3),
  imperativeFormal: Word('качайте', 3),
  imperfect: ['покачать'],
};

perfectVerbs.set(качать.name.text, качать);

export { качать };