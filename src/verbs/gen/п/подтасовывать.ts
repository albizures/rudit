import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтасовывать: PerfectVerb = {
  name: Word('подтасовывать', 6),
  singular1stPerson: Word('подтасовываю', 6),
  singular2ndPerson: Word('подтасовываешь', 6),
  singular3rdPerson: Word('подтасовывает', 6),
  plural1stPerson: Word('подтасовываем', 6),
  plural2ndPerson: Word('подтасовываете', 6),
  plural3rdPerson: Word('подтасовывают', 6),
  masculinePast: Word('подтасовывал', 6),
  femininePast: Word('подтасовывала', 6),
  neuterPast: Word('подтасовывало', 6),
  pluralPast: Word('подтасовывали', 6),
  imperativeInformal: Word('подтасовывай', 6),
  imperativeFormal: Word('подтасовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(подтасовывать.name.text, подтасовывать);

export { подтасовывать };