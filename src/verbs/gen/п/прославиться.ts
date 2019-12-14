import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прославиться: PerfectVerb = {
  name: Word('прославиться', 5),
  singular1stPerson: Word('прославлюсь', 5),
  singular2ndPerson: Word('прославишься', 5),
  singular3rdPerson: Word('прославится', 5),
  plural1stPerson: Word('прославимся', 5),
  plural2ndPerson: Word('прославитесь', 5),
  plural3rdPerson: Word('прославятся', 5),
  masculinePast: Word('прославился', 5),
  femininePast: Word('прославилась', 5),
  neuterPast: Word('прославилось', 5),
  pluralPast: Word('прославились', 5),
  imperativeInformal: Word('прославься', 5),
  imperativeFormal: Word('прославьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(прославиться.name.text, прославиться);

export { прославиться };