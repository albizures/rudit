import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрючиваться: PerfectVerb = {
  name: Word('скрючиваться', 3),
  singular1stPerson: Word('скрючиваюсь', 3),
  singular2ndPerson: Word('скрючиваешься', 3),
  singular3rdPerson: Word('скрючивается', 3),
  plural1stPerson: Word('скрючиваемся', 3),
  plural2ndPerson: Word('скрючиваетесь', 3),
  plural3rdPerson: Word('скрючиваются', 3),
  masculinePast: Word('скрючивался', 3),
  femininePast: Word('скрючивалась', 3),
  neuterPast: Word('скрючивалось', 3),
  pluralPast: Word('скрючивались', 3),
  imperativeInformal: Word('скрючивайся', 3),
  imperativeFormal: Word('скрючивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(скрючиваться.name.text, скрючиваться);

export { скрючиваться };