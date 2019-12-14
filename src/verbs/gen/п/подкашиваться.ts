import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкашиваться: PerfectVerb = {
  name: Word('подкашиваться', 4),
  singular1stPerson: Word('подкашиваюсь', 4),
  singular2ndPerson: Word('подкашиваешься', 4),
  singular3rdPerson: Word('подкашивается', 4),
  plural1stPerson: Word('подкашиваемся', 4),
  plural2ndPerson: Word('подкашиваетесь', 4),
  plural3rdPerson: Word('подкашиваются', 4),
  masculinePast: Word('подкашивался', 4),
  femininePast: Word('подкашивалась', 4),
  neuterPast: Word('подкашивалось', 4),
  pluralPast: Word('подкашивались', 4),
  imperativeInformal: Word('подкашивайся', 4),
  imperativeFormal: Word('подкашивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подкашиваться.name.text, подкашиваться);

export { подкашиваться };