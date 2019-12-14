import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрыскать: PerfectVerb = {
  name: Word('обрыскать', 3),
  singular1stPerson: Word('обрыщу', 3),
  singular2ndPerson: Word('обрыщешь', 3),
  singular3rdPerson: Word('обрыщет', 3),
  plural1stPerson: Word('обрыщем', 3),
  plural2ndPerson: Word('обрыщете', 3),
  plural3rdPerson: Word('обрыщут', 3),
  masculinePast: Word('обрыскал', 3),
  femininePast: Word('обрыскала', 3),
  neuterPast: Word('обрыскало', 3),
  pluralPast: Word('обрыскали', 3),
  imperativeInformal: Word('обрыщи', 3),
  imperativeFormal: Word('обрыщите', 3),
  imperfect: [],
};

perfectVerbs.set(обрыскать.name.text, обрыскать);

export { обрыскать };