import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const германизироваться: PerfectVerb = {
  name: Word('германизироваться', 8),
  singular1stPerson: Word('германизируюсь', 8),
  singular2ndPerson: Word('германизируешься', 8),
  singular3rdPerson: Word('германизируется', 8),
  plural1stPerson: Word('германизируемся', 8),
  plural2ndPerson: Word('германизируетесь', 8),
  plural3rdPerson: Word('германизируются', 8),
  masculinePast: Word('германизировался', 8),
  femininePast: Word('германизировалась', 8),
  neuterPast: Word('германизировалось', 8),
  pluralPast: Word('германизировались', 8),
  imperativeInformal: Word('германизируйся', 8),
  imperativeFormal: Word('германизируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(германизироваться.name.text, германизироваться);

export { германизироваться };