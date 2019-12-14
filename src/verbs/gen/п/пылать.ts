import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пылать: PerfectVerb = {
  name: Word('пылать', 3),
  singular1stPerson: Word('пылаю', 3),
  singular2ndPerson: Word('пылаешь', 3),
  singular3rdPerson: Word('пылает', 3),
  plural1stPerson: Word('пылаем', 3),
  plural2ndPerson: Word('пылаете', 3),
  plural3rdPerson: Word('пылают', 3),
  masculinePast: Word('пылал', 3),
  femininePast: Word('пылала', 3),
  neuterPast: Word('пылало', 3),
  pluralPast: Word('пылали', 3),
  imperativeInformal: Word('пылай', 3),
  imperativeFormal: Word('пылайте', 3),
  imperfect: [],
};

perfectVerbs.set(пылать.name.text, пылать);

export { пылать };