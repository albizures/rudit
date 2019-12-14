import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсчитывать: PerfectVerb = {
  name: Word('обсчитывать', 4),
  singular1stPerson: Word('обсчитываю', 4),
  singular2ndPerson: Word('обсчитываешь', 4),
  singular3rdPerson: Word('обсчитывает', 4),
  plural1stPerson: Word('обсчитываем', 4),
  plural2ndPerson: Word('обсчитываете', 4),
  plural3rdPerson: Word('обсчитывают', 4),
  masculinePast: Word('обсчитывал', 4),
  femininePast: Word('обсчитывала', 4),
  neuterPast: Word('обсчитывало', 4),
  pluralPast: Word('обсчитывали', 4),
  imperativeInformal: Word('обсчитывай', 4),
  imperativeFormal: Word('обсчитывайте', 4),
  imperfect: [],
};

perfectVerbs.set(обсчитывать.name.text, обсчитывать);

export { обсчитывать };