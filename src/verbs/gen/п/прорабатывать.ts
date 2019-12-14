import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорабатывать: PerfectVerb = {
  name: Word('прорабатывать', 6),
  singular1stPerson: Word('прорабатываю', 6),
  singular2ndPerson: Word('прорабатываешь', 6),
  singular3rdPerson: Word('прорабатывает', 6),
  plural1stPerson: Word('прорабатываем', 6),
  plural2ndPerson: Word('прорабатываете', 6),
  plural3rdPerson: Word('прорабатывают', 6),
  masculinePast: Word('прорабатывал', 6),
  femininePast: Word('прорабатывала', 6),
  neuterPast: Word('прорабатывало', 6),
  pluralPast: Word('прорабатывали', 6),
  imperativeInformal: Word('прорабатывай', 6),
  imperativeFormal: Word('прорабатывайте', 6),
  imperfect: [],
};

perfectVerbs.set(прорабатывать.name.text, прорабатывать);

export { прорабатывать };