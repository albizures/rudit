import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отклеиваться: PerfectVerb = {
  name: Word('отклеиваться', 4),
  singular1stPerson: Word('отклеиваюсь', 4),
  singular2ndPerson: Word('отклеиваешься', 4),
  singular3rdPerson: Word('отклеивается', 4),
  plural1stPerson: Word('отклеиваемся', 4),
  plural2ndPerson: Word('отклеиваетесь', 4),
  plural3rdPerson: Word('отклеиваются', 4),
  masculinePast: Word('отклеивался', 4),
  femininePast: Word('отклеивалась', 4),
  neuterPast: Word('отклеивалось', 4),
  pluralPast: Word('отклеивались', 4),
  imperativeInformal: Word('отклеивайся', 4),
  imperativeFormal: Word('отклеивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отклеиваться.name.text, отклеиваться);

export { отклеиваться };