import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ударяться: PerfectVerb = {
  name: Word('ударяться', 4),
  singular1stPerson: Word('ударяюсь', 4),
  singular2ndPerson: Word('ударяешься', 4),
  singular3rdPerson: Word('ударяется', 4),
  plural1stPerson: Word('ударяемся', 4),
  plural2ndPerson: Word('ударяетесь', 4),
  plural3rdPerson: Word('ударяются', 4),
  masculinePast: Word('ударялся', 4),
  femininePast: Word('ударялась', 4),
  neuterPast: Word('ударялось', 4),
  pluralPast: Word('ударялись', 4),
  imperativeInformal: Word('ударяйся', 4),
  imperativeFormal: Word('ударяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ударяться.name.text, ударяться);

export { ударяться };