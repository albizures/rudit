import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распаковываться: PerfectVerb = {
  name: Word('распаковываться', 6),
  singular1stPerson: Word('распаковываюсь', 6),
  singular2ndPerson: Word('распаковываешься', 6),
  singular3rdPerson: Word('распаковывается', 6),
  plural1stPerson: Word('распаковываемся', 6),
  plural2ndPerson: Word('распаковываетесь', 6),
  plural3rdPerson: Word('распаковываются', 6),
  masculinePast: Word('распаковывался', 6),
  femininePast: Word('распаковывалась', 6),
  neuterPast: Word('распаковывалось', 6),
  pluralPast: Word('распаковывались', 6),
  imperativeInformal: Word('распаковывайся', 6),
  imperativeFormal: Word('распаковывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(распаковываться.name.text, распаковываться);

export { распаковываться };