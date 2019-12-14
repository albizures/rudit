import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорастать: PerfectVerb = {
  name: Word('прорастать', 7),
  singular1stPerson: Word('прорастаю', 7),
  singular2ndPerson: Word('прорастаешь', 7),
  singular3rdPerson: Word('прорастает', 7),
  plural1stPerson: Word('прорастаем', 7),
  plural2ndPerson: Word('прорастаете', 7),
  plural3rdPerson: Word('прорастают', 7),
  masculinePast: Word('прорастал', 7),
  femininePast: Word('прорастала', 7),
  neuterPast: Word('прорастало', 7),
  pluralPast: Word('прорастали', 7),
  imperativeInformal: Word('прорастай', 7),
  imperativeFormal: Word('прорастайте', 7),
  imperfect: [],
};

perfectVerbs.set(прорастать.name.text, прорастать);

export { прорастать };