import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откидываться: PerfectVerb = {
  name: Word('откидываться', 3),
  singular1stPerson: Word('откидываюсь', 3),
  singular2ndPerson: Word('откидываешься', 3),
  singular3rdPerson: Word('откидывается', 3),
  plural1stPerson: Word('откидываемся', 3),
  plural2ndPerson: Word('откидываетесь', 3),
  plural3rdPerson: Word('откидываются', 3),
  masculinePast: Word('откидывался', 3),
  femininePast: Word('откидывалась', 3),
  neuterPast: Word('откидывалось', 3),
  pluralPast: Word('откидывались', 3),
  imperativeInformal: Word('откидывайся', 3),
  imperativeFormal: Word('откидывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(откидываться.name.text, откидываться);

export { откидываться };