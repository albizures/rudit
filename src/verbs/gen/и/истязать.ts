import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истязать: PerfectVerb = {
  name: Word('истязать', 5),
  singular1stPerson: Word('истязаю', 5),
  singular2ndPerson: Word('истязаешь', 5),
  singular3rdPerson: Word('истязает', 5),
  plural1stPerson: Word('истязаем', 5),
  plural2ndPerson: Word('истязаете', 5),
  plural3rdPerson: Word('истязают', 5),
  masculinePast: Word('истязал', 5),
  femininePast: Word('истязала', 5),
  neuterPast: Word('истязало', 5),
  pluralPast: Word('истязали', 5),
  imperativeInformal: Word('истязай', 5),
  imperativeFormal: Word('истязайте', 5),
  imperfect: [],
};

perfectVerbs.set(истязать.name.text, истязать);

export { истязать };