import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсмеиваться: PerfectVerb = {
  name: Word('подсмеиваться', 5),
  singular1stPerson: Word('подсмеиваюсь', 5),
  singular2ndPerson: Word('подсмеиваешься', 5),
  singular3rdPerson: Word('подсмеивается', 5),
  plural1stPerson: Word('подсмеиваемся', 5),
  plural2ndPerson: Word('подсмеиваетесь', 5),
  plural3rdPerson: Word('подсмеиваются', 5),
  masculinePast: Word('подсмеивался', 5),
  femininePast: Word('подсмеивалась', 5),
  neuterPast: Word('подсмеивалось', 5),
  pluralPast: Word('подсмеивались', 5),
  imperativeInformal: Word('подсмеивайся', 5),
  imperativeFormal: Word('подсмеивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(подсмеиваться.name.text, подсмеиваться);

export { подсмеиваться };