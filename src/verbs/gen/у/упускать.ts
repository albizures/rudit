import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упускать: PerfectVerb = {
  name: Word('упускать', 5),
  singular1stPerson: Word('упускаю', 5),
  singular2ndPerson: Word('упускаешь', 5),
  singular3rdPerson: Word('упускает', 5),
  plural1stPerson: Word('упускаем', 5),
  plural2ndPerson: Word('упускаете', 5),
  plural3rdPerson: Word('упускают', 5),
  masculinePast: Word('упускал', 5),
  femininePast: Word('упускала', 5),
  neuterPast: Word('упускало', 5),
  pluralPast: Word('упускали', 5),
  imperativeInformal: Word('упускай', 5),
  imperativeFormal: Word('упускайте', 5),
  imperfect: ['упустить'],
};

perfectVerbs.set(упускать.name.text, упускать);

export { упускать };