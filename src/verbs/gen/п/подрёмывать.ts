import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрёмывать: PerfectVerb = {
  name: Word('подрёмывать', 8),
  singular1stPerson: Word('подрёмываю', 8),
  singular2ndPerson: Word('подрёмываешь', 8),
  singular3rdPerson: Word('подрёмывает', 8),
  plural1stPerson: Word('подрёмываем', 8),
  plural2ndPerson: Word('подрёмываете', 8),
  plural3rdPerson: Word('подрёмывают', 8),
  masculinePast: Word('подрёмывал', 8),
  femininePast: Word('подрёмывала', 8),
  neuterPast: Word('подрёмывало', 8),
  pluralPast: Word('подрёмывали', 8),
  imperativeInformal: Word('подрёмывай', 8),
  imperativeFormal: Word('подрёмывайте', 8),
  imperfect: [],
};

perfectVerbs.set(подрёмывать.name.text, подрёмывать);

export { подрёмывать };