import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прекращать: PerfectVerb = {
  name: Word('прекращать', 7),
  singular1stPerson: Word('прекращаю', 7),
  singular2ndPerson: Word('прекращаешь', 7),
  singular3rdPerson: Word('прекращает', 7),
  plural1stPerson: Word('прекращаем', 7),
  plural2ndPerson: Word('прекращаете', 7),
  plural3rdPerson: Word('прекращают', 7),
  masculinePast: Word('прекращал', 7),
  femininePast: Word('прекращала', 7),
  neuterPast: Word('прекращало', 7),
  pluralPast: Word('прекращали', 7),
  imperativeInformal: Word('прекращай', 7),
  imperativeFormal: Word('прекращайте', 7),
  imperfect: ['прекратить'],
};

perfectVerbs.set(прекращать.name.text, прекращать);

export { прекращать };