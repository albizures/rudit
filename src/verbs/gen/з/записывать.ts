import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const записывать: PerfectVerb = {
  name: Word('записывать', 3),
  singular1stPerson: Word('записываю', 3),
  singular2ndPerson: Word('записываешь', 3),
  singular3rdPerson: Word('записывает', 3),
  plural1stPerson: Word('записываем', 3),
  plural2ndPerson: Word('записываете', 3),
  plural3rdPerson: Word('записывают', 3),
  masculinePast: Word('записывал', 3),
  femininePast: Word('записывала', 3),
  neuterPast: Word('записывало', 3),
  pluralPast: Word('записывали', 3),
  imperativeInformal: Word('записывай', 3),
  imperativeFormal: Word('записывайте', 3),
  imperfect: ['записать'],
};

perfectVerbs.set(записывать.name.text, записывать);

export { записывать };