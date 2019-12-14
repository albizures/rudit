import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передумывать: PerfectVerb = {
  name: Word('передумывать', 5),
  singular1stPerson: Word('передумываю', 5),
  singular2ndPerson: Word('передумываешь', 5),
  singular3rdPerson: Word('передумывает', 5),
  plural1stPerson: Word('передумываем', 5),
  plural2ndPerson: Word('передумываете', 5),
  plural3rdPerson: Word('передумывают', 5),
  masculinePast: Word('передумывал', 5),
  femininePast: Word('передумывала', 5),
  neuterPast: Word('передумывало', 5),
  pluralPast: Word('передумывали', 5),
  imperativeInformal: Word('передумывай', 5),
  imperativeFormal: Word('передумывайте', 5),
  imperfect: [],
};

perfectVerbs.set(передумывать.name.text, передумывать);

export { передумывать };