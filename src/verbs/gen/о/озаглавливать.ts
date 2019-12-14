import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озаглавливать: PerfectVerb = {
  name: Word('озаглавливать', 5),
  singular1stPerson: Word('озаглавливаю', 5),
  singular2ndPerson: Word('озаглавливаешь', 5),
  singular3rdPerson: Word('озаглавливает', 5),
  plural1stPerson: Word('озаглавливаем', 5),
  plural2ndPerson: Word('озаглавливаете', 5),
  plural3rdPerson: Word('озаглавливают', 5),
  masculinePast: Word('озаглавливал', 5),
  femininePast: Word('озаглавливала', 5),
  neuterPast: Word('озаглавливало', 5),
  pluralPast: Word('озаглавливали', 5),
  imperativeInformal: Word('озаглавливай', 5),
  imperativeFormal: Word('озаглавливайте', 5),
  imperfect: [],
};

perfectVerbs.set(озаглавливать.name.text, озаглавливать);

export { озаглавливать };