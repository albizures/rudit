import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распрыскать: PerfectVerb = {
  name: Word('распрыскать', 5),
  singular1stPerson: Word('распрыскаю', 5),
  singular2ndPerson: Word('распрыскаешь', 5),
  singular3rdPerson: Word('распрыскает', 5),
  plural1stPerson: Word('распрыскаем', 5),
  plural2ndPerson: Word('распрыскаете', 5),
  plural3rdPerson: Word('распрыскают', 5),
  masculinePast: Word('распрыскал', 5),
  femininePast: Word('распрыскала', 5),
  neuterPast: Word('распрыскало', 5),
  pluralPast: Word('распрыскали', 5),
  imperativeInformal: Word('распрыскай', 5),
  imperativeFormal: Word('распрыскайте', 5),
  imperfect: [],
};

perfectVerbs.set(распрыскать.name.text, распрыскать);

export { распрыскать };