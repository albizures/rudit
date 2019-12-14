import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задолжать: PerfectVerb = {
  name: Word('задолжать', 6),
  singular1stPerson: Word('задолжаю', 6),
  singular2ndPerson: Word('задолжаешь', 6),
  singular3rdPerson: Word('задолжает', 6),
  plural1stPerson: Word('задолжаем', 6),
  plural2ndPerson: Word('задолжаете', 6),
  plural3rdPerson: Word('задолжают', 6),
  masculinePast: Word('задолжал', 6),
  femininePast: Word('задолжала', 6),
  neuterPast: Word('задолжало', 6),
  pluralPast: Word('задолжали', 6),
  imperativeInformal: Word('задолжай', 6),
  imperativeFormal: Word('задолжайте', 6),
  imperfect: [],
};

perfectVerbs.set(задолжать.name.text, задолжать);

export { задолжать };