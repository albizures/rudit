import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const длиться: PerfectVerb = {
  name: Word('длиться', 2),
  singular1stPerson: Word('длюсь', 2),
  singular2ndPerson: Word('длишься', 2),
  singular3rdPerson: Word('длится', 2),
  plural1stPerson: Word('длимся', 2),
  plural2ndPerson: Word('длитесь', 2),
  plural3rdPerson: Word('длятся', 2),
  masculinePast: Word('длился', 2),
  femininePast: Word('длилась', 2),
  neuterPast: Word('длилось', 2),
  pluralPast: Word('длились', 2),
  imperativeInformal: Word('длись', 2),
  imperativeFormal: Word('длитесь', 2),
  imperfect: [],
};

perfectVerbs.set(длиться.name.text, длиться);

export { длиться };