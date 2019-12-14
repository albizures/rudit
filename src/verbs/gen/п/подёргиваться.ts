import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подёргиваться: PerfectVerb = {
  name: Word('подёргиваться', 8),
  singular1stPerson: Word('подёргиваюсь', 8),
  singular2ndPerson: Word('подёргиваешься', 8),
  singular3rdPerson: Word('подёргивается', 8),
  plural1stPerson: Word('подёргиваемся', 8),
  plural2ndPerson: Word('подёргиваетесь', 8),
  plural3rdPerson: Word('подёргиваются', 8),
  masculinePast: Word('подёргивался', 8),
  femininePast: Word('подёргивалась', 8),
  neuterPast: Word('подёргивалось', 8),
  pluralPast: Word('подёргивались', 8),
  imperativeInformal: Word('подёргивайся', 8),
  imperativeFormal: Word('подёргивайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(подёргиваться.name.text, подёргиваться);

export { подёргиваться };