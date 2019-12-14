import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспениваться: PerfectVerb = {
  name: Word('вспениваться', 3),
  singular1stPerson: Word('вспениваюсь', 3),
  singular2ndPerson: Word('вспениваешься', 3),
  singular3rdPerson: Word('вспенивается', 3),
  plural1stPerson: Word('вспениваемся', 3),
  plural2ndPerson: Word('вспениваетесь', 3),
  plural3rdPerson: Word('вспениваются', 3),
  masculinePast: Word('вспенивался', 3),
  femininePast: Word('вспенивалась', 3),
  neuterPast: Word('вспенивалось', 3),
  pluralPast: Word('вспенивались', 3),
  imperativeInformal: Word('вспенивайся', 3),
  imperativeFormal: Word('вспенивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вспениваться.name.text, вспениваться);

export { вспениваться };