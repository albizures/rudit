import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const репатриироваться: PerfectVerb = {
  name: Word('репатриироваться', 7),
  singular1stPerson: Word('репатриируюсь', 7),
  singular2ndPerson: Word('репатриируешься', 7),
  singular3rdPerson: Word('репатриируется', 7),
  plural1stPerson: Word('репатриируемся', 7),
  plural2ndPerson: Word('репатриируетесь', 7),
  plural3rdPerson: Word('репатриируются', 7),
  masculinePast: Word('репатриировался', 7),
  femininePast: Word('репатриировалась', 7),
  neuterPast: Word('репатриировалось', 7),
  pluralPast: Word('репатриировались', 7),
  imperativeInformal: Word('репатриируйся', 7),
  imperativeFormal: Word('репатриируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(репатриироваться.name.text, репатриироваться);

export { репатриироваться };