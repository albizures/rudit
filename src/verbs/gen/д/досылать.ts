import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досылать: PerfectVerb = {
  name: Word('досылать', 5),
  singular1stPerson: Word('досылаю', 5),
  singular2ndPerson: Word('досылаешь', 5),
  singular3rdPerson: Word('досылает', 5),
  plural1stPerson: Word('досылаем', 5),
  plural2ndPerson: Word('досылаете', 5),
  plural3rdPerson: Word('досылают', 5),
  masculinePast: Word('досылал', 5),
  femininePast: Word('досылала', 5),
  neuterPast: Word('досылало', 5),
  pluralPast: Word('досылали', 5),
  imperativeInformal: Word('досылай', 5),
  imperativeFormal: Word('досылайте', 5),
  imperfect: [],
};

perfectVerbs.set(досылать.name.text, досылать);

export { досылать };