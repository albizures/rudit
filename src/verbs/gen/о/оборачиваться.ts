import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оборачиваться: PerfectVerb = {
  name: Word('оборачиваться', 4),
  singular1stPerson: Word('оборачиваюсь', 4),
  singular2ndPerson: Word('оборачиваешься', 4),
  singular3rdPerson: Word('оборачивается', 4),
  plural1stPerson: Word('оборачиваемся', 4),
  plural2ndPerson: Word('оборачиваетесь', 4),
  plural3rdPerson: Word('оборачиваются', 4),
  masculinePast: Word('оборачивался', 4),
  femininePast: Word('оборачивалась', 4),
  neuterPast: Word('оборачивалось', 4),
  pluralPast: Word('оборачивались', 4),
  imperativeInformal: Word('оборачивайся', 4),
  imperativeFormal: Word('оборачивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(оборачиваться.name.text, оборачиваться);

export { оборачиваться };