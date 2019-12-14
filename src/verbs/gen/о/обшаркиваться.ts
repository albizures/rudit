import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обшаркиваться: PerfectVerb = {
  name: Word('обшаркиваться', 3),
  singular1stPerson: Word('обшаркиваюсь', 3),
  singular2ndPerson: Word('обшаркиваешься', 3),
  singular3rdPerson: Word('обшаркивается', 3),
  plural1stPerson: Word('обшаркиваемся', 3),
  plural2ndPerson: Word('обшаркиваетесь', 3),
  plural3rdPerson: Word('обшаркиваются', 3),
  masculinePast: Word('обшаркивался', 3),
  femininePast: Word('обшаркивалась', 3),
  neuterPast: Word('обшаркивалось', 3),
  pluralPast: Word('обшаркивались', 3),
  imperativeInformal: Word('обшаркивайся', 3),
  imperativeFormal: Word('обшаркивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обшаркиваться.name.text, обшаркиваться);

export { обшаркиваться };