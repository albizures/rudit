import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убиваться: PerfectVerb = {
  name: Word('убиваться', 4),
  singular1stPerson: Word('убиваюсь', 4),
  singular2ndPerson: Word('убиваешься', 4),
  singular3rdPerson: Word('убивается', 4),
  plural1stPerson: Word('убиваемся', 4),
  plural2ndPerson: Word('убиваетесь', 4),
  plural3rdPerson: Word('убиваются', 4),
  masculinePast: Word('убивался', 4),
  femininePast: Word('убивалась', 4),
  neuterPast: Word('убивалось', 4),
  pluralPast: Word('убивались', 4),
  imperativeInformal: Word('убивайся', 4),
  imperativeFormal: Word('убивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(убиваться.name.text, убиваться);

export { убиваться };