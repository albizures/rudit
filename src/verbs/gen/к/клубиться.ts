import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клубиться: PerfectVerb = {
  name: Word('клубиться', 4),
  singular1stPerson: Word('клублюсь', 5),
  singular2ndPerson: Word('клубишься', 4),
  singular3rdPerson: Word('клубится', 4),
  plural1stPerson: Word('клубимся', 4),
  plural2ndPerson: Word('клубитесь', 4),
  plural3rdPerson: Word('клубятся', 4),
  masculinePast: Word('клубился', 4),
  femininePast: Word('клубилась', 4),
  neuterPast: Word('клубилось', 4),
  pluralPast: Word('клубились', 4),
  imperativeInformal: Word('клубись', 4),
  imperativeFormal: Word('клубитесь', 4),
  imperfect: [],
};

perfectVerbs.set(клубиться.name.text, клубиться);

export { клубиться };