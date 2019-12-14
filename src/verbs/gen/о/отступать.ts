import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отступать: PerfectVerb = {
  name: Word('отступать', 6),
  singular1stPerson: Word('отступаю', 6),
  singular2ndPerson: Word('отступаешь', 6),
  singular3rdPerson: Word('отступает', 6),
  plural1stPerson: Word('отступаем', 6),
  plural2ndPerson: Word('отступаете', 6),
  plural3rdPerson: Word('отступают', 6),
  masculinePast: Word('отступал', 6),
  femininePast: Word('отступала', 6),
  neuterPast: Word('отступало', 6),
  pluralPast: Word('отступали', 6),
  imperativeInformal: Word('отступай', 6),
  imperativeFormal: Word('отступайте', 6),
  imperfect: ['отступить'],
};

perfectVerbs.set(отступать.name.text, отступать);

export { отступать };