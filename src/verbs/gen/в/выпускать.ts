import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпускать: PerfectVerb = {
  name: Word('выпускать', 6),
  singular1stPerson: Word('выпускаю', 6),
  singular2ndPerson: Word('выпускаешь', 6),
  singular3rdPerson: Word('выпускает', 6),
  plural1stPerson: Word('выпускаем', 6),
  plural2ndPerson: Word('выпускаете', 6),
  plural3rdPerson: Word('выпускают', 6),
  masculinePast: Word('выпускал', 6),
  femininePast: Word('выпускала', 6),
  neuterPast: Word('выпускало', 6),
  pluralPast: Word('выпускали', 6),
  imperativeInformal: Word('выпускай', 6),
  imperativeFormal: Word('выпускайте', 6),
  imperfect: ['выпустить'],
};

perfectVerbs.set(выпускать.name.text, выпускать);

export { выпускать };