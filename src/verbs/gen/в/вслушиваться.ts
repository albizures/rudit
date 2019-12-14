import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вслушиваться: PerfectVerb = {
  name: Word('вслушиваться', 3),
  singular1stPerson: Word('вслушиваюсь', 3),
  singular2ndPerson: Word('вслушиваешься', 3),
  singular3rdPerson: Word('вслушивается', 3),
  plural1stPerson: Word('вслушиваемся', 3),
  plural2ndPerson: Word('вслушиваетесь', 3),
  plural3rdPerson: Word('вслушиваются', 3),
  masculinePast: Word('вслушивался', 3),
  femininePast: Word('вслушивалась', 3),
  neuterPast: Word('вслушивалось', 3),
  pluralPast: Word('вслушивались', 3),
  imperativeInformal: Word('вслушивайся', 3),
  imperativeFormal: Word('вслушивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вслушиваться.name.text, вслушиваться);

export { вслушиваться };