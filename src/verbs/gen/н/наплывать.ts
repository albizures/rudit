import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплывать: PerfectVerb = {
  name: Word('наплывать', 6),
  singular1stPerson: Word('наплываю', 6),
  singular2ndPerson: Word('наплываешь', 6),
  singular3rdPerson: Word('наплывает', 6),
  plural1stPerson: Word('наплываем', 6),
  plural2ndPerson: Word('наплываете', 6),
  plural3rdPerson: Word('наплывают', 6),
  masculinePast: Word('наплывал', 6),
  femininePast: Word('наплывала', 6),
  neuterPast: Word('наплывало', 6),
  pluralPast: Word('наплывали', 6),
  imperativeInformal: Word('наплывай', 6),
  imperativeFormal: Word('наплывайте', 6),
  imperfect: [],
};

perfectVerbs.set(наплывать.name.text, наплывать);

export { наплывать };