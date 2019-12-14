import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплывать: PerfectVerb = {
  name: Word('сплывать', 5),
  singular1stPerson: Word('сплываю', 5),
  singular2ndPerson: Word('сплываешь', 5),
  singular3rdPerson: Word('сплывает', 5),
  plural1stPerson: Word('сплываем', 5),
  plural2ndPerson: Word('сплываете', 5),
  plural3rdPerson: Word('сплывают', 5),
  masculinePast: Word('сплывал', 5),
  femininePast: Word('сплывала', 5),
  neuterPast: Word('сплывало', 5),
  pluralPast: Word('сплывали', 5),
  imperativeInformal: Word('сплывай', 5),
  imperativeFormal: Word('сплывайте', 5),
  imperfect: [],
};

perfectVerbs.set(сплывать.name.text, сплывать);

export { сплывать };