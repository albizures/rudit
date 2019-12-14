import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заметать: PerfectVerb = {
  name: Word('заметать', 5),
  singular1stPerson: Word('заметаю', 5),
  singular2ndPerson: Word('заметаешь', 5),
  singular3rdPerson: Word('заметает', 5),
  plural1stPerson: Word('заметаем', 5),
  plural2ndPerson: Word('заметаете', 5),
  plural3rdPerson: Word('заметают', 5),
  masculinePast: Word('заметал', 5),
  femininePast: Word('заметала', 5),
  neuterPast: Word('заметало', 5),
  pluralPast: Word('заметали', 5),
  imperativeInformal: Word('заметай', 5),
  imperativeFormal: Word('заметайте', 5),
  imperfect: [],
};

perfectVerbs.set(заметать.name.text, заметать);

export { заметать };