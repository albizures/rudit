import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const двурушничать: PerfectVerb = {
  name: Word('двурушничать', 4),
  singular1stPerson: Word('двурушничаю', 4),
  singular2ndPerson: Word('двурушничаешь', 4),
  singular3rdPerson: Word('двурушничает', 4),
  plural1stPerson: Word('двурушничаем', 4),
  plural2ndPerson: Word('двурушничаете', 4),
  plural3rdPerson: Word('двурушничают', 4),
  masculinePast: Word('двурушничал', 4),
  femininePast: Word('двурушничала', 4),
  neuterPast: Word('двурушничало', 4),
  pluralPast: Word('двурушничали', 4),
  imperativeInformal: Word('двурушничай', 4),
  imperativeFormal: Word('двурушничайте', 4),
  imperfect: [],
};

perfectVerbs.set(двурушничать.name.text, двурушничать);

export { двурушничать };