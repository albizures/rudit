import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const витать: PerfectVerb = {
  name: Word('витать', 3),
  singular1stPerson: Word('витаю', 3),
  singular2ndPerson: Word('витаешь', 3),
  singular3rdPerson: Word('витает', 3),
  plural1stPerson: Word('витаем', 3),
  plural2ndPerson: Word('витаете', 3),
  plural3rdPerson: Word('витают', 3),
  masculinePast: Word('витал', 3),
  femininePast: Word('витала', 3),
  neuterPast: Word('витало', 3),
  pluralPast: Word('витали', 3),
  imperativeInformal: Word('витай', 3),
  imperativeFormal: Word('витайте', 3),
  imperfect: [],
};

perfectVerbs.set(витать.name.text, витать);

export { витать };