import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрёмывать: PerfectVerb = {
  name: Word('подрёмывать', 4),
  singular1stPerson: Word('подрёмываю', 4),
  singular2ndPerson: Word('подрёмываешь', 4),
  singular3rdPerson: Word('подрёмывает', 4),
  plural1stPerson: Word('подрёмываем', 4),
  plural2ndPerson: Word('подрёмываете', 4),
  plural3rdPerson: Word('подрёмывают', 4),
  masculinePast: Word('подрёмывал', 4),
  femininePast: Word('подрёмывала', 4),
  neuterPast: Word('подрёмывало', 4),
  pluralPast: Word('подрёмывали', 4),
  imperativeInformal: Word('подрёмывай', 4),
  imperativeFormal: Word('подрёмывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подрёмывать.name.text, подрёмывать);

export { подрёмывать };