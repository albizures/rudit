import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассчитываться: PerfectVerb = {
  name: Word('рассчитываться', 5),
  singular1stPerson: Word('рассчитываюсь', 5),
  singular2ndPerson: Word('рассчитываешься', 5),
  singular3rdPerson: Word('рассчитывается', 5),
  plural1stPerson: Word('рассчитываемся', 5),
  plural2ndPerson: Word('рассчитываетесь', 5),
  plural3rdPerson: Word('рассчитываются', 5),
  masculinePast: Word('рассчитывался', 5),
  femininePast: Word('рассчитывалась', 5),
  neuterPast: Word('рассчитывалось', 5),
  pluralPast: Word('рассчитывались', 5),
  imperativeInformal: Word('рассчитывайся', 5),
  imperativeFormal: Word('рассчитывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(рассчитываться.name.text, рассчитываться);

export { рассчитываться };