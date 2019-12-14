import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вглядываться: PerfectVerb = {
  name: Word('вглядываться', 3),
  singular1stPerson: Word('вглядываюсь', 3),
  singular2ndPerson: Word('вглядываешься', 3),
  singular3rdPerson: Word('вглядывается', 3),
  plural1stPerson: Word('вглядываемся', 3),
  plural2ndPerson: Word('вглядываетесь', 3),
  plural3rdPerson: Word('вглядываются', 3),
  masculinePast: Word('вглядывался', 3),
  femininePast: Word('вглядывалась', 3),
  neuterPast: Word('вглядывалось', 3),
  pluralPast: Word('вглядывались', 3),
  imperativeInformal: Word('вглядывайся', 3),
  imperativeFormal: Word('вглядывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вглядываться.name.text, вглядываться);

export { вглядываться };