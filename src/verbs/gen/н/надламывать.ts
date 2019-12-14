import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надламывать: PerfectVerb = {
  name: Word('надламывать', 4),
  singular1stPerson: Word('надламываю', 4),
  singular2ndPerson: Word('надламываешь', 4),
  singular3rdPerson: Word('надламывает', 4),
  plural1stPerson: Word('надламываем', 4),
  plural2ndPerson: Word('надламываете', 4),
  plural3rdPerson: Word('надламывают', 4),
  masculinePast: Word('надламывал', 4),
  femininePast: Word('надламывала', 4),
  neuterPast: Word('надламывало', 4),
  pluralPast: Word('надламывали', 4),
  imperativeInformal: Word('надламывай', 4),
  imperativeFormal: Word('надламывайте', 4),
  imperfect: [],
};

perfectVerbs.set(надламывать.name.text, надламывать);

export { надламывать };