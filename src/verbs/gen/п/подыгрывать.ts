import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подыгрывать: PerfectVerb = {
  name: Word('подыгрывать', 3),
  singular1stPerson: Word('подыгрываю', 3),
  singular2ndPerson: Word('подыгрываешь', 3),
  singular3rdPerson: Word('подыгрывает', 3),
  plural1stPerson: Word('подыгрываем', 3),
  plural2ndPerson: Word('подыгрываете', 3),
  plural3rdPerson: Word('подыгрывают', 3),
  masculinePast: Word('подыгрывал', 3),
  femininePast: Word('подыгрывала', 3),
  neuterPast: Word('подыгрывало', 3),
  pluralPast: Word('подыгрывали', 3),
  imperativeInformal: Word('подыгрывай', 3),
  imperativeFormal: Word('подыгрывайте', 3),
  imperfect: [],
};

perfectVerbs.set(подыгрывать.name.text, подыгрывать);

export { подыгрывать };