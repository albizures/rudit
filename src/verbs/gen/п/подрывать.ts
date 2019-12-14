import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрывать: PerfectVerb = {
  name: Word('подрывать', 6),
  singular1stPerson: Word('подрываю', 6),
  singular2ndPerson: Word('подрываешь', 6),
  singular3rdPerson: Word('подрывает', 6),
  plural1stPerson: Word('подрываем', 6),
  plural2ndPerson: Word('подрываете', 6),
  plural3rdPerson: Word('подрывают', 6),
  masculinePast: Word('подрывал', 6),
  femininePast: Word('подрывала', 6),
  neuterPast: Word('подрывало', 6),
  pluralPast: Word('подрывали', 6),
  imperativeInformal: Word('подрывай', 6),
  imperativeFormal: Word('подрывайте', 6),
  imperfect: [],
};

perfectVerbs.set(подрывать.name.text, подрывать);

export { подрывать };