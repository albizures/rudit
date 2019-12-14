import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрисовывать: PerfectVerb = {
  name: Word('подрисовывать', 6),
  singular1stPerson: Word('подрисовываю', 6),
  singular2ndPerson: Word('подрисовываешь', 6),
  singular3rdPerson: Word('подрисовывает', 6),
  plural1stPerson: Word('подрисовываем', 6),
  plural2ndPerson: Word('подрисовываете', 6),
  plural3rdPerson: Word('подрисовывают', 6),
  masculinePast: Word('подрисовывал', 6),
  femininePast: Word('подрисовывала', 6),
  neuterPast: Word('подрисовывало', 6),
  pluralPast: Word('подрисовывали', 6),
  imperativeInformal: Word('подрисовывай', 6),
  imperativeFormal: Word('подрисовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(подрисовывать.name.text, подрисовывать);

export { подрисовывать };