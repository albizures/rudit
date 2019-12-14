import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрабатывать: PerfectVerb = {
  name: Word('отрабатывать', 5),
  singular1stPerson: Word('отрабатываю', 5),
  singular2ndPerson: Word('отрабатываешь', 5),
  singular3rdPerson: Word('отрабатывает', 5),
  plural1stPerson: Word('отрабатываем', 5),
  plural2ndPerson: Word('отрабатываете', 5),
  plural3rdPerson: Word('отрабатывают', 5),
  masculinePast: Word('отрабатывал', 5),
  femininePast: Word('отрабатывала', 5),
  neuterPast: Word('отрабатывало', 5),
  pluralPast: Word('отрабатывали', 5),
  imperativeInformal: Word('отрабатывай', 5),
  imperativeFormal: Word('отрабатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(отрабатывать.name.text, отрабатывать);

export { отрабатывать };