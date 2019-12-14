import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разламывать: PerfectVerb = {
  name: Word('разламывать', 4),
  singular1stPerson: Word('разламываю', 4),
  singular2ndPerson: Word('разламываешь', 4),
  singular3rdPerson: Word('разламывает', 4),
  plural1stPerson: Word('разламываем', 4),
  plural2ndPerson: Word('разламываете', 4),
  plural3rdPerson: Word('разламывают', 4),
  masculinePast: Word('разламывал', 4),
  femininePast: Word('разламывала', 4),
  neuterPast: Word('разламывало', 4),
  pluralPast: Word('разламывали', 4),
  imperativeInformal: Word('разламывай', 4),
  imperativeFormal: Word('разламывайте', 4),
  imperfect: [],
};

perfectVerbs.set(разламывать.name.text, разламывать);

export { разламывать };