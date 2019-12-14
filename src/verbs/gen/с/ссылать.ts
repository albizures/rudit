import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссылать: PerfectVerb = {
  name: Word('ссылать', 4),
  singular1stPerson: Word('ссылаю', 4),
  singular2ndPerson: Word('ссылаешь', 4),
  singular3rdPerson: Word('ссылает', 4),
  plural1stPerson: Word('ссылаем', 4),
  plural2ndPerson: Word('ссылаете', 4),
  plural3rdPerson: Word('ссылают', 4),
  masculinePast: Word('ссылал', 4),
  femininePast: Word('ссылала', 4),
  neuterPast: Word('ссылало', 4),
  pluralPast: Word('ссылали', 4),
  imperativeInformal: Word('ссылай', 4),
  imperativeFormal: Word('ссылайте', 4),
  imperfect: [],
};

perfectVerbs.set(ссылать.name.text, ссылать);

export { ссылать };