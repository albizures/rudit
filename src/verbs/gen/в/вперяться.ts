import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вперяться: PerfectVerb = {
  name: Word('вперяться', 4),
  singular1stPerson: Word('вперяюсь', 4),
  singular2ndPerson: Word('вперяешься', 4),
  singular3rdPerson: Word('вперяется', 4),
  plural1stPerson: Word('вперяемся', 4),
  plural2ndPerson: Word('вперяетесь', 4),
  plural3rdPerson: Word('вперяются', 4),
  masculinePast: Word('вперялся', 4),
  femininePast: Word('вперялась', 4),
  neuterPast: Word('вперялось', 4),
  pluralPast: Word('вперялись', 4),
  imperativeInformal: Word('вперяйся', 4),
  imperativeFormal: Word('вперяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вперяться.name.text, вперяться);

export { вперяться };