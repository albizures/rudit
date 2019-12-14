import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытягиваться: PerfectVerb = {
  name: Word('вытягиваться', 3),
  singular1stPerson: Word('вытягиваюсь', 3),
  singular2ndPerson: Word('вытягиваешься', 3),
  singular3rdPerson: Word('вытягивается', 3),
  plural1stPerson: Word('вытягиваемся', 3),
  plural2ndPerson: Word('вытягиваетесь', 3),
  plural3rdPerson: Word('вытягиваются', 3),
  masculinePast: Word('вытягивался', 3),
  femininePast: Word('вытягивалась', 3),
  neuterPast: Word('вытягивалось', 3),
  pluralPast: Word('вытягивались', 3),
  imperativeInformal: Word('вытягивайся', 3),
  imperativeFormal: Word('вытягивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вытягиваться.name.text, вытягиваться);

export { вытягиваться };