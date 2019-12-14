import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вчитываться: PerfectVerb = {
  name: Word('вчитываться', 2),
  singular1stPerson: Word('вчитываюсь', 2),
  singular2ndPerson: Word('вчитываешься', 2),
  singular3rdPerson: Word('вчитывается', 2),
  plural1stPerson: Word('вчитываемся', 2),
  plural2ndPerson: Word('вчитываетесь', 2),
  plural3rdPerson: Word('вчитываются', 2),
  masculinePast: Word('вчитывался', 2),
  femininePast: Word('вчитывалась', 2),
  neuterPast: Word('вчитывалось', 2),
  pluralPast: Word('вчитывались', 2),
  imperativeInformal: Word('вчитывайся', 2),
  imperativeFormal: Word('вчитывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вчитываться.name.text, вчитываться);

export { вчитываться };