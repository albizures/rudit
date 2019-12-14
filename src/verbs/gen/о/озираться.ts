import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озираться: PerfectVerb = {
  name: Word('озираться', 4),
  singular1stPerson: Word('озираюсь', 4),
  singular2ndPerson: Word('озираешься', 4),
  singular3rdPerson: Word('озирается', 4),
  plural1stPerson: Word('озираемся', 4),
  plural2ndPerson: Word('озираетесь', 4),
  plural3rdPerson: Word('озираются', 4),
  masculinePast: Word('озирался', 4),
  femininePast: Word('озиралась', 4),
  neuterPast: Word('озиралось', 4),
  pluralPast: Word('озирались', 4),
  imperativeInformal: Word('озирайся', 4),
  imperativeFormal: Word('озирайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(озираться.name.text, озираться);

export { озираться };