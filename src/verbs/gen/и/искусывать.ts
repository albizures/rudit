import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искусывать: PerfectVerb = {
  name: Word('искусывать', 3),
  singular1stPerson: Word('искусываю', 3),
  singular2ndPerson: Word('искусываешь', 3),
  singular3rdPerson: Word('искусывает', 3),
  plural1stPerson: Word('искусываем', 3),
  plural2ndPerson: Word('искусываете', 3),
  plural3rdPerson: Word('искусывают', 3),
  masculinePast: Word('искусывал', 3),
  femininePast: Word('искусывала', 3),
  neuterPast: Word('искусывало', 3),
  pluralPast: Word('искусывали', 3),
  imperativeInformal: Word('искусывай', 3),
  imperativeFormal: Word('искусывайте', 3),
  imperfect: [],
};

perfectVerbs.set(искусывать.name.text, искусывать);

export { искусывать };