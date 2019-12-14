import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срисовывать: PerfectVerb = {
  name: Word('срисовывать', 4),
  singular1stPerson: Word('срисовываю', 4),
  singular2ndPerson: Word('срисовываешь', 4),
  singular3rdPerson: Word('срисовывает', 4),
  plural1stPerson: Word('срисовываем', 4),
  plural2ndPerson: Word('срисовываете', 4),
  plural3rdPerson: Word('срисовывают', 4),
  masculinePast: Word('срисовывал', 4),
  femininePast: Word('срисовывала', 4),
  neuterPast: Word('срисовывало', 4),
  pluralPast: Word('срисовывали', 4),
  imperativeInformal: Word('срисовывай', 4),
  imperativeFormal: Word('срисовывайте', 4),
  imperfect: [],
};

perfectVerbs.set(срисовывать.name.text, срисовывать);

export { срисовывать };