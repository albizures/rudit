import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забывать: PerfectVerb = {
  name: Word('забывать', 5),
  singular1stPerson: Word('забываю', 5),
  singular2ndPerson: Word('забываешь', 5),
  singular3rdPerson: Word('забывает', 5),
  plural1stPerson: Word('забываем', 5),
  plural2ndPerson: Word('забываете', 5),
  plural3rdPerson: Word('забывают', 5),
  masculinePast: Word('забывал', 5),
  femininePast: Word('забывала', 5),
  neuterPast: Word('забывало', 5),
  pluralPast: Word('забывали', 5),
  imperativeInformal: Word('забывай', 5),
  imperativeFormal: Word('забывайте', 5),
  imperfect: ['забыть'],
};

perfectVerbs.set(забывать.name.text, забывать);

export { забывать };