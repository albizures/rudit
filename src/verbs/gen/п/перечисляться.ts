import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечисляться: PerfectVerb = {
  name: Word('перечисляться', 8),
  singular1stPerson: Word('перечисляюсь', 8),
  singular2ndPerson: Word('перечисляешься', 8),
  singular3rdPerson: Word('перечисляется', 8),
  plural1stPerson: Word('перечисляемся', 8),
  plural2ndPerson: Word('перечисляетесь', 8),
  plural3rdPerson: Word('перечисляются', 8),
  masculinePast: Word('перечислялся', 8),
  femininePast: Word('перечислялась', 8),
  neuterPast: Word('перечислялось', 8),
  pluralPast: Word('перечислялись', 8),
  imperativeInformal: Word('перечисляйся', 8),
  imperativeFormal: Word('перечисляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(перечисляться.name.text, перечисляться);

export { перечисляться };