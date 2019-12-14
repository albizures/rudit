import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искапывать: PerfectVerb = {
  name: Word('искапывать', 3),
  singular1stPerson: Word('искапываю', 3),
  singular2ndPerson: Word('искапываешь', 3),
  singular3rdPerson: Word('искапывает', 3),
  plural1stPerson: Word('искапываем', 3),
  plural2ndPerson: Word('искапываете', 3),
  plural3rdPerson: Word('искапывают', 3),
  masculinePast: Word('искапывал', 3),
  femininePast: Word('искапывала', 3),
  neuterPast: Word('искапывало', 3),
  pluralPast: Word('искапывали', 3),
  imperativeInformal: Word('искапывай', 3),
  imperativeFormal: Word('искапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(искапывать.name.text, искапывать);

export { искапывать };