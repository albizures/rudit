import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отплывать: PerfectVerb = {
  name: Word('отплывать', 6),
  singular1stPerson: Word('отплываю', 6),
  singular2ndPerson: Word('отплываешь', 6),
  singular3rdPerson: Word('отплывает', 6),
  plural1stPerson: Word('отплываем', 6),
  plural2ndPerson: Word('отплываете', 6),
  plural3rdPerson: Word('отплывают', 6),
  masculinePast: Word('отплывал', 6),
  femininePast: Word('отплывала', 6),
  neuterPast: Word('отплывало', 6),
  pluralPast: Word('отплывали', 6),
  imperativeInformal: Word('отплывай', 6),
  imperativeFormal: Word('отплывайте', 6),
  imperfect: ['отплыть'],
};

perfectVerbs.set(отплывать.name.text, отплывать);

export { отплывать };