import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const организовывать: PerfectVerb = {
  name: Word('организовывать', 7),
  singular1stPerson: Word('организовываю', 7),
  singular2ndPerson: Word('организовываешь', 7),
  singular3rdPerson: Word('организовывает', 7),
  plural1stPerson: Word('организовываем', 7),
  plural2ndPerson: Word('организовываете', 7),
  plural3rdPerson: Word('организовывают', 7),
  masculinePast: Word('организовывал', 7),
  femininePast: Word('организовывала', 7),
  neuterPast: Word('организовывало', 7),
  pluralPast: Word('организовывали', 7),
  imperativeInformal: Word('организовывай', 7),
  imperativeFormal: Word('организовывайте', 7),
  imperfect: ['организовать'],
};

perfectVerbs.set(организовывать.name.text, организовывать);

export { организовывать };