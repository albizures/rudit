import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const европеизироваться: PerfectVerb = {
  name: Word('европеизироваться', 8),
  singular1stPerson: Word('европеизируюсь', 8),
  singular2ndPerson: Word('европеизируешься', 8),
  singular3rdPerson: Word('европеизируется', 8),
  plural1stPerson: Word('европеизируемся', 8),
  plural2ndPerson: Word('европеизируетесь', 8),
  plural3rdPerson: Word('европеизируются', 8),
  masculinePast: Word('европеизировался', 8),
  femininePast: Word('европеизировалась', 8),
  neuterPast: Word('европеизировалось', 8),
  pluralPast: Word('европеизировались', 8),
  imperativeInformal: Word('европеизируйся', 8),
  imperativeFormal: Word('европеизируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(европеизироваться.name.text, европеизироваться);

export { европеизироваться };