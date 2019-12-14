import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосчитываться: PerfectVerb = {
  name: Word('сосчитываться', 4),
  singular1stPerson: Word('сосчитываюсь', 4),
  singular2ndPerson: Word('сосчитываешься', 4),
  singular3rdPerson: Word('сосчитывается', 4),
  plural1stPerson: Word('сосчитываемся', 4),
  plural2ndPerson: Word('сосчитываетесь', 4),
  plural3rdPerson: Word('сосчитываются', 4),
  masculinePast: Word('сосчитывался', 4),
  femininePast: Word('сосчитывалась', 4),
  neuterPast: Word('сосчитывалось', 4),
  pluralPast: Word('сосчитывались', 4),
  imperativeInformal: Word('сосчитывайся', 4),
  imperativeFormal: Word('сосчитывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сосчитываться.name.text, сосчитываться);

export { сосчитываться };