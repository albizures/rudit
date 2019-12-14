import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const образовываться: PerfectVerb = {
  name: Word('образовываться', 5),
  singular1stPerson: Word('образовываюсь', 5),
  singular2ndPerson: Word('образовываешься', 5),
  singular3rdPerson: Word('образовывается', 5),
  plural1stPerson: Word('образовываемся', 5),
  plural2ndPerson: Word('образовываетесь', 5),
  plural3rdPerson: Word('образовываются', 5),
  masculinePast: Word('образовывался', 5),
  femininePast: Word('образовывалась', 5),
  neuterPast: Word('образовывалось', 5),
  pluralPast: Word('образовывались', 5),
  imperativeInformal: Word('образовывайся', 5),
  imperativeFormal: Word('образовывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(образовываться.name.text, образовываться);

export { образовываться };