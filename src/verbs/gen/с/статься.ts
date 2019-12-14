import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const статься: PerfectVerb = {
  name: Word('статься', 2),
  singular1stPerson: Word('станусь', 2),
  singular2ndPerson: Word('станешься', 2),
  singular3rdPerson: Word('станется', 2),
  plural1stPerson: Word('станемся', 2),
  plural2ndPerson: Word('станетесь', 2),
  plural3rdPerson: Word('станутся', 2),
  masculinePast: Word('стался', 2),
  femininePast: Word('сталась', 2),
  neuterPast: Word('сталось', 2),
  pluralPast: Word('стались', 2),
  imperativeInformal: Word('станься', 2),
  imperativeFormal: Word('станьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(статься.name.text, статься);

export { статься };