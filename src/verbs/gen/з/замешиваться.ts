import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замешиваться: PerfectVerb = {
  name: Word('замешиваться', 3),
  singular1stPerson: Word('замешиваюсь', 3),
  singular2ndPerson: Word('замешиваешься', 3),
  singular3rdPerson: Word('замешивается', 3),
  plural1stPerson: Word('замешиваемся', 3),
  plural2ndPerson: Word('замешиваетесь', 3),
  plural3rdPerson: Word('замешиваются', 3),
  masculinePast: Word('замешивался', 3),
  femininePast: Word('замешивалась', 3),
  neuterPast: Word('замешивалось', 3),
  pluralPast: Word('замешивались', 3),
  imperativeInformal: Word('замешивайся', 3),
  imperativeFormal: Word('замешивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замешиваться.name.text, замешиваться);

export { замешиваться };