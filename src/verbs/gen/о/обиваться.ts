import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обиваться: PerfectVerb = {
  name: Word('обиваться', 4),
  singular1stPerson: Word('обиваюсь', 4),
  singular2ndPerson: Word('обиваешься', 4),
  singular3rdPerson: Word('обивается', 4),
  plural1stPerson: Word('обиваемся', 4),
  plural2ndPerson: Word('обиваетесь', 4),
  plural3rdPerson: Word('обиваются', 4),
  masculinePast: Word('обивался', 4),
  femininePast: Word('обивалась', 4),
  neuterPast: Word('обивалось', 4),
  pluralPast: Word('обивались', 4),
  imperativeInformal: Word('обивайся', 4),
  imperativeFormal: Word('обивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(обиваться.name.text, обиваться);

export { обиваться };