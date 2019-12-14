import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымываться: PerfectVerb = {
  name: Word('вымываться', 5),
  singular1stPerson: Word('вымываюсь', 5),
  singular2ndPerson: Word('вымываешься', 5),
  singular3rdPerson: Word('вымывается', 5),
  plural1stPerson: Word('вымываемся', 5),
  plural2ndPerson: Word('вымываетесь', 5),
  plural3rdPerson: Word('вымываются', 5),
  masculinePast: Word('вымывался', 5),
  femininePast: Word('вымывалась', 5),
  neuterPast: Word('вымывалось', 5),
  pluralPast: Word('вымывались', 5),
  imperativeInformal: Word('вымывайся', 5),
  imperativeFormal: Word('вымывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вымываться.name.text, вымываться);

export { вымываться };