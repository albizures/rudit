import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпускать: PerfectVerb = {
  name: Word('отпускать', 6),
  singular1stPerson: Word('отпускаю', 6),
  singular2ndPerson: Word('отпускаешь', 6),
  singular3rdPerson: Word('отпускает', 6),
  plural1stPerson: Word('отпускаем', 6),
  plural2ndPerson: Word('отпускаете', 6),
  plural3rdPerson: Word('отпускают', 6),
  masculinePast: Word('отпускал', 6),
  femininePast: Word('отпускала', 6),
  neuterPast: Word('отпускало', 6),
  pluralPast: Word('отпускали', 6),
  imperativeInformal: Word('отпускай', 6),
  imperativeFormal: Word('отпускайте', 6),
  imperfect: ['отпустить'],
};

perfectVerbs.set(отпускать.name.text, отпускать);

export { отпускать };