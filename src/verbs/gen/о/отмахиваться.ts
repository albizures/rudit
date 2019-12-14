import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмахиваться: PerfectVerb = {
  name: Word('отмахиваться', 3),
  singular1stPerson: Word('отмахиваюсь', 3),
  singular2ndPerson: Word('отмахиваешься', 3),
  singular3rdPerson: Word('отмахивается', 3),
  plural1stPerson: Word('отмахиваемся', 3),
  plural2ndPerson: Word('отмахиваетесь', 3),
  plural3rdPerson: Word('отмахиваются', 3),
  masculinePast: Word('отмахивался', 3),
  femininePast: Word('отмахивалась', 3),
  neuterPast: Word('отмахивалось', 3),
  pluralPast: Word('отмахивались', 3),
  imperativeInformal: Word('отмахивайся', 3),
  imperativeFormal: Word('отмахивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отмахиваться.name.text, отмахиваться);

export { отмахиваться };