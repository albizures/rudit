import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колоться: PerfectVerb = {
  name: Word('колоться', 3),
  singular1stPerson: Word('колюсь', 3),
  singular2ndPerson: Word('колешься', 1),
  singular3rdPerson: Word('колется', 1),
  plural1stPerson: Word('колемся', 1),
  plural2ndPerson: Word('колетесь', 1),
  plural3rdPerson: Word('колются', 1),
  masculinePast: Word('кололся', 3),
  femininePast: Word('кололась', 3),
  neuterPast: Word('кололось', 3),
  pluralPast: Word('кололись', 3),
  imperativeInformal: Word('колись', 3),
  imperativeFormal: Word('колитесь', 3),
  imperfect: [],
};

perfectVerbs.set(колоться.name.text, колоться);

export { колоться };