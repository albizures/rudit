import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвиваться: PerfectVerb = {
  name: Word('обвиваться', 5),
  singular1stPerson: Word('обвиваюсь', 5),
  singular2ndPerson: Word('обвиваешься', 5),
  singular3rdPerson: Word('обвивается', 5),
  plural1stPerson: Word('обвиваемся', 5),
  plural2ndPerson: Word('обвиваетесь', 5),
  plural3rdPerson: Word('обвиваются', 5),
  masculinePast: Word('обвивался', 5),
  femininePast: Word('обвивалась', 5),
  neuterPast: Word('обвивалось', 5),
  pluralPast: Word('обвивались', 5),
  imperativeInformal: Word('обвивайся', 5),
  imperativeFormal: Word('обвивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обвиваться.name.text, обвиваться);

export { обвиваться };