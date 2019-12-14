import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вклеиваться: PerfectVerb = {
  name: Word('вклеиваться', 3),
  singular1stPerson: Word('вклеиваюсь', 3),
  singular2ndPerson: Word('вклеиваешься', 3),
  singular3rdPerson: Word('вклеивается', 3),
  plural1stPerson: Word('вклеиваемся', 3),
  plural2ndPerson: Word('вклеиваетесь', 3),
  plural3rdPerson: Word('вклеиваются', 3),
  masculinePast: Word('вклеивался', 3),
  femininePast: Word('вклеивалась', 3),
  neuterPast: Word('вклеивалось', 3),
  pluralPast: Word('вклеивались', 3),
  imperativeInformal: Word('вклеивайся', 3),
  imperativeFormal: Word('вклеивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вклеиваться.name.text, вклеиваться);

export { вклеиваться };