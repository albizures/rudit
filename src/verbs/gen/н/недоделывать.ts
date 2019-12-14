import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоделывать: PerfectVerb = {
  name: Word('недоделывать', 5),
  singular1stPerson: Word('недоделываю', 5),
  singular2ndPerson: Word('недоделываешь', 5),
  singular3rdPerson: Word('недоделывает', 5),
  plural1stPerson: Word('недоделываем', 5),
  plural2ndPerson: Word('недоделываете', 5),
  plural3rdPerson: Word('недоделывают', 5),
  masculinePast: Word('недоделывал', 5),
  femininePast: Word('недоделывала', 5),
  neuterPast: Word('недоделывало', 5),
  pluralPast: Word('недоделывали', 5),
  imperativeInformal: Word('недоделывай', 5),
  imperativeFormal: Word('недоделывайте', 5),
  imperfect: [],
};

perfectVerbs.set(недоделывать.name.text, недоделывать);

export { недоделывать };