import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпячиваться: PerfectVerb = {
  name: Word('выпячиваться', 3),
  singular1stPerson: Word('выпячиваюсь', 3),
  singular2ndPerson: Word('выпячиваешься', 3),
  singular3rdPerson: Word('выпячивается', 3),
  plural1stPerson: Word('выпячиваемся', 3),
  plural2ndPerson: Word('выпячиваетесь', 3),
  plural3rdPerson: Word('выпячиваются', 3),
  masculinePast: Word('выпячивался', 3),
  femininePast: Word('выпячивалась', 3),
  neuterPast: Word('выпячивалось', 3),
  pluralPast: Word('выпячивались', 3),
  imperativeInformal: Word('выпячивайся', 3),
  imperativeFormal: Word('выпячивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выпячиваться.name.text, выпячиваться);

export { выпячиваться };