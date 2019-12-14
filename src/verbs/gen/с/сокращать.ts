import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сокращать: PerfectVerb = {
  name: Word('сокращать', 6),
  singular1stPerson: Word('сокращаю', 6),
  singular2ndPerson: Word('сокращаешь', 6),
  singular3rdPerson: Word('сокращает', 6),
  plural1stPerson: Word('сокращаем', 6),
  plural2ndPerson: Word('сокращаете', 6),
  plural3rdPerson: Word('сокращают', 6),
  masculinePast: Word('сокращал', 6),
  femininePast: Word('сокращала', 6),
  neuterPast: Word('сокращало', 6),
  pluralPast: Word('сокращали', 6),
  imperativeInformal: Word('сокращай', 6),
  imperativeFormal: Word('сокращайте', 6),
  imperfect: ['сократить'],
};

perfectVerbs.set(сокращать.name.text, сокращать);

export { сокращать };