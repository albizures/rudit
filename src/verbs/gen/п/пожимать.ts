import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожимать: PerfectVerb = {
  name: Word('пожимать', 5),
  singular1stPerson: Word('пожимаю', 5),
  singular2ndPerson: Word('пожимаешь', 5),
  singular3rdPerson: Word('пожимает', 5),
  plural1stPerson: Word('пожимаем', 5),
  plural2ndPerson: Word('пожимаете', 5),
  plural3rdPerson: Word('пожимают', 5),
  masculinePast: Word('пожимал', 5),
  femininePast: Word('пожимала', 5),
  neuterPast: Word('пожимало', 5),
  pluralPast: Word('пожимали', 5),
  imperativeInformal: Word('пожимай', 5),
  imperativeFormal: Word('пожимайте', 5),
  imperfect: [],
};

perfectVerbs.set(пожимать.name.text, пожимать);

export { пожимать };