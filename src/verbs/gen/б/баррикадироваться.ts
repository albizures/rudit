import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const баррикадироваться: PerfectVerb = {
  name: Word('баррикадироваться', 8),
  singular1stPerson: Word('баррикадируюсь', 8),
  singular2ndPerson: Word('баррикадируешься', 8),
  singular3rdPerson: Word('баррикадируется', 8),
  plural1stPerson: Word('баррикадируемся', 8),
  plural2ndPerson: Word('баррикадируетесь', 8),
  plural3rdPerson: Word('баррикадируются', 8),
  masculinePast: Word('баррикадировался', 8),
  femininePast: Word('баррикадировалась', 8),
  neuterPast: Word('баррикадировалось', 8),
  pluralPast: Word('баррикадировались', 8),
  imperativeInformal: Word('баррикадируйся', 8),
  imperativeFormal: Word('баррикадируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(баррикадироваться.name.text, баррикадироваться);

export { баррикадироваться };