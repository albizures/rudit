import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвращать: PerfectVerb = {
  name: Word('отвращать', 6),
  singular1stPerson: Word('отвращаю', 6),
  singular2ndPerson: Word('отвращаешь', 6),
  singular3rdPerson: Word('отвращает', 6),
  plural1stPerson: Word('отвращаем', 6),
  plural2ndPerson: Word('отвращаете', 6),
  plural3rdPerson: Word('отвращают', 6),
  masculinePast: Word('отвращал', 6),
  femininePast: Word('отвращала', 6),
  neuterPast: Word('отвращало', 6),
  pluralPast: Word('отвращали', 6),
  imperativeInformal: Word('отвращай', 6),
  imperativeFormal: Word('отвращайте', 6),
  imperfect: ['отвратить'],
};

perfectVerbs.set(отвращать.name.text, отвращать);

export { отвращать };