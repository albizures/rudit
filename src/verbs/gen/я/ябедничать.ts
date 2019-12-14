import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ябедничать: PerfectVerb = {
  name: Word('ябедничать', 0),
  singular1stPerson: Word('ябедничаю', 0),
  singular2ndPerson: Word('ябедничаешь', 0),
  singular3rdPerson: Word('ябедничает', 0),
  plural1stPerson: Word('ябедничаем', 0),
  plural2ndPerson: Word('ябедничаете', 0),
  plural3rdPerson: Word('ябедничают', 0),
  masculinePast: Word('ябедничал', 0),
  femininePast: Word('ябедничала', 0),
  neuterPast: Word('ябедничало', 0),
  pluralPast: Word('ябедничали', 0),
  imperativeInformal: Word('ябедничай', 0),
  imperativeFormal: Word('ябедничайте', 0),
  imperfect: [],
};

perfectVerbs.set(ябедничать.name.text, ябедничать);

export { ябедничать };