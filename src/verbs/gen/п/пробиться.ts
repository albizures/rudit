import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробиться: PerfectVerb = {
  name: Word('пробиться', 4),
  singular1stPerson: Word('пробьюсь', 5),
  singular2ndPerson: Word('пробьёшься', 5),
  singular3rdPerson: Word('пробьётся', 5),
  plural1stPerson: Word('пробьёмся', 5),
  plural2ndPerson: Word('пробьётесь', 5),
  plural3rdPerson: Word('пробьются', 5),
  masculinePast: Word('пробился', 4),
  femininePast: Word('пробилась', 4),
  neuterPast: Word('пробилось', 4),
  pluralPast: Word('пробились', 4),
  imperativeInformal: Word('пробейся', 4),
  imperativeFormal: Word('пробейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пробиться.name.text, пробиться);

export { пробиться };