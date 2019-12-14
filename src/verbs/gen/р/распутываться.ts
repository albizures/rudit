import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распутываться: PerfectVerb = {
  name: Word('распутываться', 4),
  singular1stPerson: Word('распутываюсь', 4),
  singular2ndPerson: Word('распутываешься', 4),
  singular3rdPerson: Word('распутывается', 4),
  plural1stPerson: Word('распутываемся', 4),
  plural2ndPerson: Word('распутываетесь', 4),
  plural3rdPerson: Word('распутываются', 4),
  masculinePast: Word('распутывался', 4),
  femininePast: Word('распутывалась', 4),
  neuterPast: Word('распутывалось', 4),
  pluralPast: Word('распутывались', 4),
  imperativeInformal: Word('распутывайся', 4),
  imperativeFormal: Word('распутывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(распутываться.name.text, распутываться);

export { распутываться };