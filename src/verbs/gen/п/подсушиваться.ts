import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсушиваться: PerfectVerb = {
  name: Word('подсушиваться', 4),
  singular1stPerson: Word('подсушиваюсь', 4),
  singular2ndPerson: Word('подсушиваешься', 4),
  singular3rdPerson: Word('подсушивается', 4),
  plural1stPerson: Word('подсушиваемся', 4),
  plural2ndPerson: Word('подсушиваетесь', 4),
  plural3rdPerson: Word('подсушиваются', 4),
  masculinePast: Word('подсушивался', 4),
  femininePast: Word('подсушивалась', 4),
  neuterPast: Word('подсушивалось', 4),
  pluralPast: Word('подсушивались', 4),
  imperativeInformal: Word('подсушивайся', 4),
  imperativeFormal: Word('подсушивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подсушиваться.name.text, подсушиваться);

export { подсушиваться };