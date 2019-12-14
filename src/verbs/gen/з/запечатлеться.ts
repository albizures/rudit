import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запечатлеться: PerfectVerb = {
  name: Word('запечатлеться', 8),
  singular1stPerson: Word('запечатлеюсь', 8),
  singular2ndPerson: Word('запечатлеешься', 8),
  singular3rdPerson: Word('запечатлеется', 8),
  plural1stPerson: Word('запечатлеемся', 8),
  plural2ndPerson: Word('запечатлеетесь', 8),
  plural3rdPerson: Word('запечатлеются', 8),
  masculinePast: Word('запечатлелся', 8),
  femininePast: Word('запечатлелась', 8),
  neuterPast: Word('запечатлелось', 8),
  pluralPast: Word('запечатлелись', 8),
  imperativeInformal: Word('запечатлейся', 8),
  imperativeFormal: Word('запечатлейтесь', 8),
  imperfect: [],
};

perfectVerbs.set(запечатлеться.name.text, запечатлеться);

export { запечатлеться };