import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const славянизироваться: PerfectVerb = {
  name: Word('славянизироваться', 8),
  singular1stPerson: Word('славянизируюсь', 8),
  singular2ndPerson: Word('славянизируешься', 8),
  singular3rdPerson: Word('славянизируется', 8),
  plural1stPerson: Word('славянизируемся', 8),
  plural2ndPerson: Word('славянизируетесь', 8),
  plural3rdPerson: Word('славянизируются', 8),
  masculinePast: Word('славянизировался', 8),
  femininePast: Word('славянизировалась', 8),
  neuterPast: Word('славянизировалось', 8),
  pluralPast: Word('славянизировались', 8),
  imperativeInformal: Word('славянизируйся', 8),
  imperativeFormal: Word('славянизируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(славянизироваться.name.text, славянизироваться);

export { славянизироваться };