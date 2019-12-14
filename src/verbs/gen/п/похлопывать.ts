import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похлопывать: PerfectVerb = {
  name: Word('похлопывать', 4),
  singular1stPerson: Word('похлопываю', 4),
  singular2ndPerson: Word('похлопываешь', 4),
  singular3rdPerson: Word('похлопывает', 4),
  plural1stPerson: Word('похлопываем', 4),
  plural2ndPerson: Word('похлопываете', 4),
  plural3rdPerson: Word('похлопывают', 4),
  masculinePast: Word('похлопывал', 4),
  femininePast: Word('похлопывала', 4),
  neuterPast: Word('похлопывало', 4),
  pluralPast: Word('похлопывали', 4),
  imperativeInformal: Word('похлопывай', 4),
  imperativeFormal: Word('похлопывайте', 4),
  imperfect: [],
};

perfectVerbs.set(похлопывать.name.text, похлопывать);

export { похлопывать };