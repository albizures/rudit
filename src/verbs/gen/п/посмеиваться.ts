import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посмеиваться: PerfectVerb = {
  name: Word('посмеиваться', 4),
  singular1stPerson: Word('посмеиваюсь', 4),
  singular2ndPerson: Word('посмеиваешься', 4),
  singular3rdPerson: Word('посмеивается', 4),
  plural1stPerson: Word('посмеиваемся', 4),
  plural2ndPerson: Word('посмеиваетесь', 4),
  plural3rdPerson: Word('посмеиваются', 4),
  masculinePast: Word('посмеивался', 4),
  femininePast: Word('посмеивалась', 4),
  neuterPast: Word('посмеивалось', 4),
  pluralPast: Word('посмеивались', 4),
  imperativeInformal: Word('посмеивайся', 4),
  imperativeFormal: Word('посмеивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(посмеиваться.name.text, посмеиваться);

export { посмеиваться };