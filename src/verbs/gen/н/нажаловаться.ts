import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажаловаться: PerfectVerb = {
  name: Word('нажаловаться', 3),
  singular1stPerson: Word('нажалуюсь', 3),
  singular2ndPerson: Word('нажалуешься', 3),
  singular3rdPerson: Word('нажалуется', 3),
  plural1stPerson: Word('нажалуемся', 3),
  plural2ndPerson: Word('нажалуетесь', 3),
  plural3rdPerson: Word('нажалуются', 3),
  masculinePast: Word('нажаловался', 3),
  femininePast: Word('нажаловалась', 3),
  neuterPast: Word('нажаловалось', 3),
  pluralPast: Word('нажаловались', 3),
  imperativeInformal: Word('нажалуйся', 3),
  imperativeFormal: Word('нажалуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(нажаловаться.name.text, нажаловаться);

export { нажаловаться };