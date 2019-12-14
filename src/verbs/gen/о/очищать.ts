import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очищать: PerfectVerb = {
  name: Word('очищать', 4),
  singular1stPerson: Word('очищаю', 4),
  singular2ndPerson: Word('очищаешь', 4),
  singular3rdPerson: Word('очищает', 4),
  plural1stPerson: Word('очищаем', 4),
  plural2ndPerson: Word('очищаете', 4),
  plural3rdPerson: Word('очищают', 4),
  masculinePast: Word('очищал', 4),
  femininePast: Word('очищала', 4),
  neuterPast: Word('очищало', 4),
  pluralPast: Word('очищали', 4),
  imperativeInformal: Word('очищай', 4),
  imperativeFormal: Word('очищайте', 4),
  imperfect: [],
};

perfectVerbs.set(очищать.name.text, очищать);

export { очищать };