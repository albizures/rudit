import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побывать: PerfectVerb = {
  name: Word('побывать', 5),
  singular1stPerson: Word('побываю', 5),
  singular2ndPerson: Word('побываешь', 5),
  singular3rdPerson: Word('побывает', 5),
  plural1stPerson: Word('побываем', 5),
  plural2ndPerson: Word('побываете', 5),
  plural3rdPerson: Word('побывают', 5),
  masculinePast: Word('побывал', 5),
  femininePast: Word('побывала', 5),
  neuterPast: Word('побывало', 5),
  pluralPast: Word('побывали', 5),
  imperativeInformal: Word('побывай', 5),
  imperativeFormal: Word('побывайте', 5),
  imperfect: ['бывать'],
};

perfectVerbs.set(побывать.name.text, побывать);

export { побывать };