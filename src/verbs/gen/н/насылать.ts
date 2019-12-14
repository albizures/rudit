import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насылать: PerfectVerb = {
  name: Word('насылать', 5),
  singular1stPerson: Word('насылаю', 5),
  singular2ndPerson: Word('насылаешь', 5),
  singular3rdPerson: Word('насылает', 5),
  plural1stPerson: Word('насылаем', 5),
  plural2ndPerson: Word('насылаете', 5),
  plural3rdPerson: Word('насылают', 5),
  masculinePast: Word('насылал', 5),
  femininePast: Word('насылала', 5),
  neuterPast: Word('насылало', 5),
  pluralPast: Word('насылали', 5),
  imperativeInformal: Word('насылай', 5),
  imperativeFormal: Word('насылайте', 5),
  imperfect: [],
};

perfectVerbs.set(насылать.name.text, насылать);

export { насылать };