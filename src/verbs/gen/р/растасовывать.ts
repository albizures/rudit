import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растасовывать: PerfectVerb = {
  name: Word('растасовывать', 6),
  singular1stPerson: Word('растасовываю', 6),
  singular2ndPerson: Word('растасовываешь', 6),
  singular3rdPerson: Word('растасовывает', 6),
  plural1stPerson: Word('растасовываем', 6),
  plural2ndPerson: Word('растасовываете', 6),
  plural3rdPerson: Word('растасовывают', 6),
  masculinePast: Word('растасовывал', 6),
  femininePast: Word('растасовывала', 6),
  neuterPast: Word('растасовывало', 6),
  pluralPast: Word('растасовывали', 6),
  imperativeInformal: Word('растасовывай', 6),
  imperativeFormal: Word('растасовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(растасовывать.name.text, растасовывать);

export { растасовывать };