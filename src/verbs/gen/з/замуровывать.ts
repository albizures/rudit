import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замуровывать: PerfectVerb = {
  name: Word('замуровывать', 5),
  singular1stPerson: Word('замуровываю', 5),
  singular2ndPerson: Word('замуровываешь', 5),
  singular3rdPerson: Word('замуровывает', 5),
  plural1stPerson: Word('замуровываем', 5),
  plural2ndPerson: Word('замуровываете', 5),
  plural3rdPerson: Word('замуровывают', 5),
  masculinePast: Word('замуровывал', 5),
  femininePast: Word('замуровывала', 5),
  neuterPast: Word('замуровывало', 5),
  pluralPast: Word('замуровывали', 5),
  imperativeInformal: Word('замуровывай', 5),
  imperativeFormal: Word('замуровывайте', 5),
  imperfect: [],
};

perfectVerbs.set(замуровывать.name.text, замуровывать);

export { замуровывать };