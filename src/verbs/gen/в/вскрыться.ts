import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскрыться: PerfectVerb = {
  name: Word('вскрыться', 4),
  singular1stPerson: Word('вскроюсь', 4),
  singular2ndPerson: Word('вскроешься', 4),
  singular3rdPerson: Word('вскроется', 4),
  plural1stPerson: Word('вскроемся', 4),
  plural2ndPerson: Word('вскроетесь', 4),
  plural3rdPerson: Word('вскроются', 4),
  masculinePast: Word('вскрылся', 4),
  femininePast: Word('вскрылась', 4),
  neuterPast: Word('вскрылось', 4),
  pluralPast: Word('вскрылись', 4),
  imperativeInformal: Word('вскройся', 4),
  imperativeFormal: Word('вскройтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вскрыться.name.text, вскрыться);

export { вскрыться };