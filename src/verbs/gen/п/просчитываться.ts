import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просчитываться: PerfectVerb = {
  name: Word('просчитываться', 5),
  singular1stPerson: Word('просчитываюсь', 5),
  singular2ndPerson: Word('просчитываешься', 5),
  singular3rdPerson: Word('просчитывается', 5),
  plural1stPerson: Word('просчитываемся', 5),
  plural2ndPerson: Word('просчитываетесь', 5),
  plural3rdPerson: Word('просчитываются', 5),
  masculinePast: Word('просчитывался', 5),
  femininePast: Word('просчитывалась', 5),
  neuterPast: Word('просчитывалось', 5),
  pluralPast: Word('просчитывались', 5),
  imperativeInformal: Word('просчитывайся', 5),
  imperativeFormal: Word('просчитывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(просчитываться.name.text, просчитываться);

export { просчитываться };