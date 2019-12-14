import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const призывать: PerfectVerb = {
  name: Word('призывать', 6),
  singular1stPerson: Word('призываю', 6),
  singular2ndPerson: Word('призываешь', 6),
  singular3rdPerson: Word('призывает', 6),
  plural1stPerson: Word('призываем', 6),
  plural2ndPerson: Word('призываете', 6),
  plural3rdPerson: Word('призывают', 6),
  masculinePast: Word('призывал', 6),
  femininePast: Word('призывала', 6),
  neuterPast: Word('призывало', 6),
  pluralPast: Word('призывали', 6),
  imperativeInformal: Word('призывай', 6),
  imperativeFormal: Word('призывайте', 6),
  imperfect: ['призвать'],
};

perfectVerbs.set(призывать.name.text, призывать);

export { призывать };