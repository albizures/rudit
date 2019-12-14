import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылечиваться: PerfectVerb = {
  name: Word('вылечиваться', 3),
  singular1stPerson: Word('вылечиваюсь', 3),
  singular2ndPerson: Word('вылечиваешься', 3),
  singular3rdPerson: Word('вылечивается', 3),
  plural1stPerson: Word('вылечиваемся', 3),
  plural2ndPerson: Word('вылечиваетесь', 3),
  plural3rdPerson: Word('вылечиваются', 3),
  masculinePast: Word('вылечивался', 3),
  femininePast: Word('вылечивалась', 3),
  neuterPast: Word('вылечивалось', 3),
  pluralPast: Word('вылечивались', 3),
  imperativeInformal: Word('вылечивайся', 3),
  imperativeFormal: Word('вылечивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вылечиваться.name.text, вылечиваться);

export { вылечиваться };