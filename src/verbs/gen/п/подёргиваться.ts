import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подёргиваться: PerfectVerb = {
  name: Word('подёргиваться', 3),
  singular1stPerson: Word('подёргиваюсь', 3),
  singular2ndPerson: Word('подёргиваешься', 3),
  singular3rdPerson: Word('подёргивается', 3),
  plural1stPerson: Word('подёргиваемся', 3),
  plural2ndPerson: Word('подёргиваетесь', 3),
  plural3rdPerson: Word('подёргиваются', 3),
  masculinePast: Word('подёргивался', 3),
  femininePast: Word('подёргивалась', 3),
  neuterPast: Word('подёргивалось', 3),
  pluralPast: Word('подёргивались', 3),
  imperativeInformal: Word('подёргивайся', 3),
  imperativeFormal: Word('подёргивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(подёргиваться.name.text, подёргиваться);

export { подёргиваться };