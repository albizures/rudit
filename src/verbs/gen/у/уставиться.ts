import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уставиться: PerfectVerb = {
  name: Word('уставиться', 3),
  singular1stPerson: Word('уставлюсь', 3),
  singular2ndPerson: Word('уставишься', 3),
  singular3rdPerson: Word('уставится', 3),
  plural1stPerson: Word('уставимся', 3),
  plural2ndPerson: Word('уставитесь', 3),
  plural3rdPerson: Word('уставятся', 3),
  masculinePast: Word('уставился', 3),
  femininePast: Word('уставилась', 3),
  neuterPast: Word('уставилось', 3),
  pluralPast: Word('уставились', 3),
  imperativeInformal: Word('уставься', 3),
  imperativeFormal: Word('уставьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(уставиться.name.text, уставиться);

export { уставиться };