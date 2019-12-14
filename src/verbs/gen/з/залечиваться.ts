import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залечиваться: PerfectVerb = {
  name: Word('залечиваться', 3),
  singular1stPerson: Word('залечиваюсь', 3),
  singular2ndPerson: Word('залечиваешься', 3),
  singular3rdPerson: Word('залечивается', 3),
  plural1stPerson: Word('залечиваемся', 3),
  plural2ndPerson: Word('залечиваетесь', 3),
  plural3rdPerson: Word('залечиваются', 3),
  masculinePast: Word('залечивался', 3),
  femininePast: Word('залечивалась', 3),
  neuterPast: Word('залечивалось', 3),
  pluralPast: Word('залечивались', 3),
  imperativeInformal: Word('залечивайся', 3),
  imperativeFormal: Word('залечивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(залечиваться.name.text, залечиваться);

export { залечиваться };