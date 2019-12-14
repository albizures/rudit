import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглушать: PerfectVerb = {
  name: Word('приглушать', 7),
  singular1stPerson: Word('приглушаю', 7),
  singular2ndPerson: Word('приглушаешь', 7),
  singular3rdPerson: Word('приглушает', 7),
  plural1stPerson: Word('приглушаем', 7),
  plural2ndPerson: Word('приглушаете', 7),
  plural3rdPerson: Word('приглушают', 7),
  masculinePast: Word('приглушал', 7),
  femininePast: Word('приглушала', 7),
  neuterPast: Word('приглушало', 7),
  pluralPast: Word('приглушали', 7),
  imperativeInformal: Word('приглушай', 7),
  imperativeFormal: Word('приглушайте', 7),
  imperfect: [],
};

perfectVerbs.set(приглушать.name.text, приглушать);

export { приглушать };