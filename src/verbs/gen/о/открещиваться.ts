import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const открещиваться: PerfectVerb = {
  name: Word('открещиваться', 4),
  singular1stPerson: Word('открещиваюсь', 4),
  singular2ndPerson: Word('открещиваешься', 4),
  singular3rdPerson: Word('открещивается', 4),
  plural1stPerson: Word('открещиваемся', 4),
  plural2ndPerson: Word('открещиваетесь', 4),
  plural3rdPerson: Word('открещиваются', 4),
  masculinePast: Word('открещивался', 4),
  femininePast: Word('открещивалась', 4),
  neuterPast: Word('открещивалось', 4),
  pluralPast: Word('открещивались', 4),
  imperativeInformal: Word('открещивайся', 4),
  imperativeFormal: Word('открещивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(открещиваться.name.text, открещиваться);

export { открещиваться };