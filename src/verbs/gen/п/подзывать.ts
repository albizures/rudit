import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подзывать: PerfectVerb = {
  name: Word('подзывать', 6),
  singular1stPerson: Word('подзываю', 6),
  singular2ndPerson: Word('подзываешь', 6),
  singular3rdPerson: Word('подзывает', 6),
  plural1stPerson: Word('подзываем', 6),
  plural2ndPerson: Word('подзываете', 6),
  plural3rdPerson: Word('подзывают', 6),
  masculinePast: Word('подзывал', 6),
  femininePast: Word('подзывала', 6),
  neuterPast: Word('подзывало', 6),
  pluralPast: Word('подзывали', 6),
  imperativeInformal: Word('подзывай', 6),
  imperativeFormal: Word('подзывайте', 6),
  imperfect: [],
};

perfectVerbs.set(подзывать.name.text, подзывать);

export { подзывать };