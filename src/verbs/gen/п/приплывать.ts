import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплывать: PerfectVerb = {
  name: Word('приплывать', 7),
  singular1stPerson: Word('приплываю', 7),
  singular2ndPerson: Word('приплываешь', 7),
  singular3rdPerson: Word('приплывает', 7),
  plural1stPerson: Word('приплываем', 7),
  plural2ndPerson: Word('приплываете', 7),
  plural3rdPerson: Word('приплывают', 7),
  masculinePast: Word('приплывал', 7),
  femininePast: Word('приплывала', 7),
  neuterPast: Word('приплывало', 7),
  pluralPast: Word('приплывали', 7),
  imperativeInformal: Word('приплывай', 7),
  imperativeFormal: Word('приплывайте', 7),
  imperfect: [],
};

perfectVerbs.set(приплывать.name.text, приплывать);

export { приплывать };