import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постанывать: PerfectVerb = {
  name: Word('постанывать', 4),
  singular1stPerson: Word('постанываю', 4),
  singular2ndPerson: Word('постанываешь', 4),
  singular3rdPerson: Word('постанывает', 4),
  plural1stPerson: Word('постанываем', 4),
  plural2ndPerson: Word('постанываете', 4),
  plural3rdPerson: Word('постанывают', 4),
  masculinePast: Word('постанывал', 4),
  femininePast: Word('постанывала', 4),
  neuterPast: Word('постанывало', 4),
  pluralPast: Word('постанывали', 4),
  imperativeInformal: Word('постанывай', 4),
  imperativeFormal: Word('постанывайте', 4),
  imperfect: [],
};

perfectVerbs.set(постанывать.name.text, постанывать);

export { постанывать };