import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжимать: PerfectVerb = {
  name: Word('сжимать', 4),
  singular1stPerson: Word('сжимаю', 4),
  singular2ndPerson: Word('сжимаешь', 4),
  singular3rdPerson: Word('сжимает', 4),
  plural1stPerson: Word('сжимаем', 4),
  plural2ndPerson: Word('сжимаете', 4),
  plural3rdPerson: Word('сжимают', 4),
  masculinePast: Word('сжимал', 4),
  femininePast: Word('сжимала', 4),
  neuterPast: Word('сжимало', 4),
  pluralPast: Word('сжимали', 4),
  imperativeInformal: Word('сжимай', 4),
  imperativeFormal: Word('сжимайте', 4),
  imperfect: ['сжать'],
};

perfectVerbs.set(сжимать.name.text, сжимать);

export { сжимать };