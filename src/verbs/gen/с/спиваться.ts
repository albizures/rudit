import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спиваться: PerfectVerb = {
  name: Word('спиваться', 4),
  singular1stPerson: Word('спиваюсь', 4),
  singular2ndPerson: Word('спиваешься', 4),
  singular3rdPerson: Word('спивается', 4),
  plural1stPerson: Word('спиваемся', 4),
  plural2ndPerson: Word('спиваетесь', 4),
  plural3rdPerson: Word('спиваются', 4),
  masculinePast: Word('спивался', 4),
  femininePast: Word('спивалась', 4),
  neuterPast: Word('спивалось', 4),
  pluralPast: Word('спивались', 4),
  imperativeInformal: Word('спивайся', 4),
  imperativeFormal: Word('спивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(спиваться.name.text, спиваться);

export { спиваться };