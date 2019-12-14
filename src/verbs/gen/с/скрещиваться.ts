import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрещиваться: PerfectVerb = {
  name: Word('скрещиваться', 3),
  singular1stPerson: Word('скрещиваюсь', 3),
  singular2ndPerson: Word('скрещиваешься', 3),
  singular3rdPerson: Word('скрещивается', 3),
  plural1stPerson: Word('скрещиваемся', 3),
  plural2ndPerson: Word('скрещиваетесь', 3),
  plural3rdPerson: Word('скрещиваются', 3),
  masculinePast: Word('скрещивался', 3),
  femininePast: Word('скрещивалась', 3),
  neuterPast: Word('скрещивалось', 3),
  pluralPast: Word('скрещивались', 3),
  imperativeInformal: Word('скрещивайся', 3),
  imperativeFormal: Word('скрещивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(скрещиваться.name.text, скрещиваться);

export { скрещиваться };