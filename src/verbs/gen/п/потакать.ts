import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потакать: PerfectVerb = {
  name: Word('потакать', 5),
  singular1stPerson: Word('потакаю', 5),
  singular2ndPerson: Word('потакаешь', 5),
  singular3rdPerson: Word('потакает', 5),
  plural1stPerson: Word('потакаем', 5),
  plural2ndPerson: Word('потакаете', 5),
  plural3rdPerson: Word('потакают', 5),
  masculinePast: Word('потакал', 5),
  femininePast: Word('потакала', 5),
  neuterPast: Word('потакало', 5),
  pluralPast: Word('потакали', 5),
  imperativeInformal: Word('потакай', 5),
  imperativeFormal: Word('потакайте', 5),
  imperfect: [],
};

perfectVerbs.set(потакать.name.text, потакать);

export { потакать };