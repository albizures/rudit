import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырваться: PerfectVerb = {
  name: Word('вырваться', 1),
  singular1stPerson: Word('вырвусь', 1),
  singular2ndPerson: Word('вырвешься', 1),
  singular3rdPerson: Word('вырвется', 1),
  plural1stPerson: Word('вырвемся', 1),
  plural2ndPerson: Word('вырветесь', 1),
  plural3rdPerson: Word('вырвутся', 1),
  masculinePast: Word('вырвался', 1),
  femininePast: Word('вырвалась', 1),
  neuterPast: Word('вырвалось', 1),
  pluralPast: Word('вырвались', 1),
  imperativeInformal: Word('вырвись', 1),
  imperativeFormal: Word('вырвитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вырваться.name.text, вырваться);

export { вырваться };