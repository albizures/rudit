import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшаркиваться: PerfectVerb = {
  name: Word('расшаркиваться', 4),
  singular1stPerson: Word('расшаркиваюсь', 4),
  singular2ndPerson: Word('расшаркиваешься', 4),
  singular3rdPerson: Word('расшаркивается', 4),
  plural1stPerson: Word('расшаркиваемся', 4),
  plural2ndPerson: Word('расшаркиваетесь', 4),
  plural3rdPerson: Word('расшаркиваются', 4),
  masculinePast: Word('расшаркивался', 4),
  femininePast: Word('расшаркивалась', 4),
  neuterPast: Word('расшаркивалось', 4),
  pluralPast: Word('расшаркивались', 4),
  imperativeInformal: Word('расшаркивайся', 4),
  imperativeFormal: Word('расшаркивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(расшаркиваться.name.text, расшаркиваться);

export { расшаркиваться };