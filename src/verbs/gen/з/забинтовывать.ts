import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забинтовывать: PerfectVerb = {
  name: Word('забинтовывать', 6),
  singular1stPerson: Word('забинтовываю', 6),
  singular2ndPerson: Word('забинтовываешь', 6),
  singular3rdPerson: Word('забинтовывает', 6),
  plural1stPerson: Word('забинтовываем', 6),
  plural2ndPerson: Word('забинтовываете', 6),
  plural3rdPerson: Word('забинтовывают', 6),
  masculinePast: Word('забинтовывал', 6),
  femininePast: Word('забинтовывала', 6),
  neuterPast: Word('забинтовывало', 6),
  pluralPast: Word('забинтовывали', 6),
  imperativeInformal: Word('забинтовывай', 6),
  imperativeFormal: Word('забинтовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(забинтовывать.name.text, забинтовывать);

export { забинтовывать };