import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усылать: PerfectVerb = {
  name: Word('усылать', 4),
  singular1stPerson: Word('усылаю', 4),
  singular2ndPerson: Word('усылаешь', 4),
  singular3rdPerson: Word('усылает', 4),
  plural1stPerson: Word('усылаем', 4),
  plural2ndPerson: Word('усылаете', 4),
  plural3rdPerson: Word('усылают', 4),
  masculinePast: Word('усылал', 4),
  femininePast: Word('усылала', 4),
  neuterPast: Word('усылало', 4),
  pluralPast: Word('усылали', 4),
  imperativeInformal: Word('усылай', 4),
  imperativeFormal: Word('усылайте', 4),
  imperfect: [],
};

perfectVerbs.set(усылать.name.text, усылать);

export { усылать };