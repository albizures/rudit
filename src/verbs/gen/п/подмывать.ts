import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмывать: PerfectVerb = {
  name: Word('подмывать', 6),
  singular1stPerson: Word('подмываю', 6),
  singular2ndPerson: Word('подмываешь', 6),
  singular3rdPerson: Word('подмывает', 6),
  plural1stPerson: Word('подмываем', 6),
  plural2ndPerson: Word('подмываете', 6),
  plural3rdPerson: Word('подмывают', 6),
  masculinePast: Word('подмывал', 6),
  femininePast: Word('подмывала', 6),
  neuterPast: Word('подмывало', 6),
  pluralPast: Word('подмывали', 6),
  imperativeInformal: Word('подмывай', 6),
  imperativeFormal: Word('подмывайте', 6),
  imperfect: [],
};

perfectVerbs.set(подмывать.name.text, подмывать);

export { подмывать };