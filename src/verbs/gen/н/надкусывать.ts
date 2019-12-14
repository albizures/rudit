import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надкусывать: PerfectVerb = {
  name: Word('надкусывать', 4),
  singular1stPerson: Word('надкусываю', 4),
  singular2ndPerson: Word('надкусываешь', 4),
  singular3rdPerson: Word('надкусывает', 4),
  plural1stPerson: Word('надкусываем', 4),
  plural2ndPerson: Word('надкусываете', 4),
  plural3rdPerson: Word('надкусывают', 4),
  masculinePast: Word('надкусывал', 4),
  femininePast: Word('надкусывала', 4),
  neuterPast: Word('надкусывало', 4),
  pluralPast: Word('надкусывали', 4),
  imperativeInformal: Word('надкусывай', 4),
  imperativeFormal: Word('надкусывайте', 4),
  imperfect: [],
};

perfectVerbs.set(надкусывать.name.text, надкусывать);

export { надкусывать };