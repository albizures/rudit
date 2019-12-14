import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разыгрывать: PerfectVerb = {
  name: Word('разыгрывать', 3),
  singular1stPerson: Word('разыгрываю', 3),
  singular2ndPerson: Word('разыгрываешь', 3),
  singular3rdPerson: Word('разыгрывает', 3),
  plural1stPerson: Word('разыгрываем', 3),
  plural2ndPerson: Word('разыгрываете', 3),
  plural3rdPerson: Word('разыгрывают', 3),
  masculinePast: Word('разыгрывал', 3),
  femininePast: Word('разыгрывала', 3),
  neuterPast: Word('разыгрывало', 3),
  pluralPast: Word('разыгрывали', 3),
  imperativeInformal: Word('разыгрывай', 3),
  imperativeFormal: Word('разыгрывайте', 3),
  imperfect: ['разыграть'],
};

perfectVerbs.set(разыгрывать.name.text, разыгрывать);

export { разыгрывать };