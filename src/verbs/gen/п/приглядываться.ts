import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглядываться: PerfectVerb = {
  name: Word('приглядываться', 5),
  singular1stPerson: Word('приглядываюсь', 5),
  singular2ndPerson: Word('приглядываешься', 5),
  singular3rdPerson: Word('приглядывается', 5),
  plural1stPerson: Word('приглядываемся', 5),
  plural2ndPerson: Word('приглядываетесь', 5),
  plural3rdPerson: Word('приглядываются', 5),
  masculinePast: Word('приглядывался', 5),
  femininePast: Word('приглядывалась', 5),
  neuterPast: Word('приглядывалось', 5),
  pluralPast: Word('приглядывались', 5),
  imperativeInformal: Word('приглядывайся', 5),
  imperativeFormal: Word('приглядывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(приглядываться.name.text, приглядываться);

export { приглядываться };