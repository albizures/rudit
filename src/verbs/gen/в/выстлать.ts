import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстлать: PerfectVerb = {
  name: Word('выстлать', 1),
  singular1stPerson: Word('выстелю', 1),
  singular2ndPerson: Word('выстелешь', 1),
  singular3rdPerson: Word('выстелет', 1),
  plural1stPerson: Word('выстелем', 1),
  plural2ndPerson: Word('выстелете', 1),
  plural3rdPerson: Word('выстелют', 1),
  masculinePast: Word('выстлал', 1),
  femininePast: Word('выстлала', 1),
  neuterPast: Word('выстлало', 1),
  pluralPast: Word('выстлали', 1),
  imperativeInformal: Word('выстели', 1),
  imperativeFormal: Word('выстелите', 1),
  imperfect: [],
};

perfectVerbs.set(выстлать.name.text, выстлать);

export { выстлать };