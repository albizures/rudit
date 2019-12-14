import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отряжать: PerfectVerb = {
  name: Word('отряжать', 5),
  singular1stPerson: Word('отряжаю', 5),
  singular2ndPerson: Word('отряжаешь', 5),
  singular3rdPerson: Word('отряжает', 5),
  plural1stPerson: Word('отряжаем', 5),
  plural2ndPerson: Word('отряжаете', 5),
  plural3rdPerson: Word('отряжают', 5),
  masculinePast: Word('отряжал', 5),
  femininePast: Word('отряжала', 5),
  neuterPast: Word('отряжало', 5),
  pluralPast: Word('отряжали', 5),
  imperativeInformal: Word('отряжай', 5),
  imperativeFormal: Word('отряжайте', 5),
  imperfect: ['отрядить'],
};

perfectVerbs.set(отряжать.name.text, отряжать);

export { отряжать };