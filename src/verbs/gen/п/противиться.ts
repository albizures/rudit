import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противиться: PerfectVerb = {
  name: Word('противиться', 4),
  singular1stPerson: Word('противлюсь', 4),
  singular2ndPerson: Word('противишься', 4),
  singular3rdPerson: Word('противится', 4),
  plural1stPerson: Word('противимся', 4),
  plural2ndPerson: Word('противитесь', 4),
  plural3rdPerson: Word('противятся', 4),
  masculinePast: Word('противился', 4),
  femininePast: Word('противилась', 4),
  neuterPast: Word('противилось', 4),
  pluralPast: Word('противились', 4),
  imperativeInformal: Word('противься', 4),
  imperativeFormal: Word('противьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(противиться.name.text, противиться);

export { противиться };