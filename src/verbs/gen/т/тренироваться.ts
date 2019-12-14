import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тренироваться: PerfectVerb = {
  name: Word('тренироваться', 8),
  singular1stPerson: Word('тренируюсь', 6),
  singular2ndPerson: Word('тренируешься', 6),
  singular3rdPerson: Word('тренируется', 6),
  plural1stPerson: Word('тренируемся', 6),
  plural2ndPerson: Word('тренируетесь', 6),
  plural3rdPerson: Word('тренируются', 6),
  masculinePast: Word('тренировался', 8),
  femininePast: Word('тренировалась', 8),
  neuterPast: Word('тренировалось', 8),
  pluralPast: Word('тренировались', 8),
  imperativeInformal: Word('тренируйся', 6),
  imperativeFormal: Word('тренируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(тренироваться.name.text, тренироваться);

export { тренироваться };