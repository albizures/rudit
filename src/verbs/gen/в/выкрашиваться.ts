import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкрашиваться: PerfectVerb = {
  name: Word('выкрашиваться', 4),
  singular1stPerson: Word('выкрашиваюсь', 4),
  singular2ndPerson: Word('выкрашиваешься', 4),
  singular3rdPerson: Word('выкрашивается', 4),
  plural1stPerson: Word('выкрашиваемся', 4),
  plural2ndPerson: Word('выкрашиваетесь', 4),
  plural3rdPerson: Word('выкрашиваются', 4),
  masculinePast: Word('выкрашивался', 4),
  femininePast: Word('выкрашивалась', 4),
  neuterPast: Word('выкрашивалось', 4),
  pluralPast: Word('выкрашивались', 4),
  imperativeInformal: Word('выкрашивайся', 4),
  imperativeFormal: Word('выкрашивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(выкрашиваться.name.text, выкрашиваться);

export { выкрашиваться };