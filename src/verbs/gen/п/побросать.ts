import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побросать: PerfectVerb = {
  name: Word('побросать', 6),
  singular1stPerson: Word('побросаю', 6),
  singular2ndPerson: Word('побросаешь', 6),
  singular3rdPerson: Word('побросает', 6),
  plural1stPerson: Word('побросаем', 6),
  plural2ndPerson: Word('побросаете', 6),
  plural3rdPerson: Word('побросают', 6),
  masculinePast: Word('побросал', 6),
  femininePast: Word('побросала', 6),
  neuterPast: Word('побросало', 6),
  pluralPast: Word('побросали', 6),
  imperativeInformal: Word('побросай', 6),
  imperativeFormal: Word('побросайте', 6),
  imperfect: [],
};

perfectVerbs.set(побросать.name.text, побросать);

export { побросать };