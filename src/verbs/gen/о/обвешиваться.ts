import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвешиваться: PerfectVerb = {
  name: Word('обвешиваться', 3),
  singular1stPerson: Word('обвешиваюсь', 3),
  singular2ndPerson: Word('обвешиваешься', 3),
  singular3rdPerson: Word('обвешивается', 3),
  plural1stPerson: Word('обвешиваемся', 3),
  plural2ndPerson: Word('обвешиваетесь', 3),
  plural3rdPerson: Word('обвешиваются', 3),
  masculinePast: Word('обвешивался', 3),
  femininePast: Word('обвешивалась', 3),
  neuterPast: Word('обвешивалось', 3),
  pluralPast: Word('обвешивались', 3),
  imperativeInformal: Word('обвешивайся', 3),
  imperativeFormal: Word('обвешивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обвешиваться.name.text, обвешиваться);

export { обвешиваться };