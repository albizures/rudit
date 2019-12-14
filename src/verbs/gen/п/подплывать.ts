import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подплывать: PerfectVerb = {
  name: Word('подплывать', 7),
  singular1stPerson: Word('подплываю', 7),
  singular2ndPerson: Word('подплываешь', 7),
  singular3rdPerson: Word('подплывает', 7),
  plural1stPerson: Word('подплываем', 7),
  plural2ndPerson: Word('подплываете', 7),
  plural3rdPerson: Word('подплывают', 7),
  masculinePast: Word('подплывал', 7),
  femininePast: Word('подплывала', 7),
  neuterPast: Word('подплывало', 7),
  pluralPast: Word('подплывали', 7),
  imperativeInformal: Word('подплывай', 7),
  imperativeFormal: Word('подплывайте', 7),
  imperfect: [],
};

perfectVerbs.set(подплывать.name.text, подплывать);

export { подплывать };