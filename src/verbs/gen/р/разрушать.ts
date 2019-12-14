import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрушать: PerfectVerb = {
  name: Word('разрушать', 6),
  singular1stPerson: Word('разрушаю', 6),
  singular2ndPerson: Word('разрушаешь', 6),
  singular3rdPerson: Word('разрушает', 6),
  plural1stPerson: Word('разрушаем', 6),
  plural2ndPerson: Word('разрушаете', 6),
  plural3rdPerson: Word('разрушают', 6),
  masculinePast: Word('разрушал', 6),
  femininePast: Word('разрушала', 6),
  neuterPast: Word('разрушало', 6),
  pluralPast: Word('разрушали', 6),
  imperativeInformal: Word('разрушай', 6),
  imperativeFormal: Word('разрушайте', 6),
  imperfect: ['разрушить'],
};

perfectVerbs.set(разрушать.name.text, разрушать);

export { разрушать };