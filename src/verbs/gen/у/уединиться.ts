import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уединиться: PerfectVerb = {
  name: Word('уединиться', 5),
  singular1stPerson: Word('уединюсь', 5),
  singular2ndPerson: Word('уединишься', 5),
  singular3rdPerson: Word('уединится', 5),
  plural1stPerson: Word('уединимся', 5),
  plural2ndPerson: Word('уединитесь', 5),
  plural3rdPerson: Word('уединятся', 5),
  masculinePast: Word('уединился', 5),
  femininePast: Word('уединилась', 5),
  neuterPast: Word('уединилось', 5),
  pluralPast: Word('уединились', 5),
  imperativeInformal: Word('уединись', 5),
  imperativeFormal: Word('уединитесь', 5),
  imperfect: [],
};

perfectVerbs.set(уединиться.name.text, уединиться);

export { уединиться };