import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вступать: PerfectVerb = {
  name: Word('вступать', 5),
  singular1stPerson: Word('вступаю', 5),
  singular2ndPerson: Word('вступаешь', 5),
  singular3rdPerson: Word('вступает', 5),
  plural1stPerson: Word('вступаем', 5),
  plural2ndPerson: Word('вступаете', 5),
  plural3rdPerson: Word('вступают', 5),
  masculinePast: Word('вступал', 5),
  femininePast: Word('вступала', 5),
  neuterPast: Word('вступало', 5),
  pluralPast: Word('вступали', 5),
  imperativeInformal: Word('вступай', 5),
  imperativeFormal: Word('вступайте', 5),
  imperfect: ['вступить'],
};

perfectVerbs.set(вступать.name.text, вступать);

export { вступать };