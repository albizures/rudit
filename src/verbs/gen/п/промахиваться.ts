import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промахиваться: PerfectVerb = {
  name: Word('промахиваться', 4),
  singular1stPerson: Word('промахиваюсь', 4),
  singular2ndPerson: Word('промахиваешься', 4),
  singular3rdPerson: Word('промахивается', 4),
  plural1stPerson: Word('промахиваемся', 4),
  plural2ndPerson: Word('промахиваетесь', 4),
  plural3rdPerson: Word('промахиваются', 4),
  masculinePast: Word('промахивался', 4),
  femininePast: Word('промахивалась', 4),
  neuterPast: Word('промахивалось', 4),
  pluralPast: Word('промахивались', 4),
  imperativeInformal: Word('промахивайся', 4),
  imperativeFormal: Word('промахивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(промахиваться.name.text, промахиваться);

export { промахиваться };