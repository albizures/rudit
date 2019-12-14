import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахохлиться: PerfectVerb = {
  name: Word('нахохлиться', 3),
  singular1stPerson: Word('нахохлюсь', 3),
  singular2ndPerson: Word('нахохлишься', 3),
  singular3rdPerson: Word('нахохлится', 3),
  plural1stPerson: Word('нахохлимся', 3),
  plural2ndPerson: Word('нахохлитесь', 3),
  plural3rdPerson: Word('нахохлятся', 3),
  masculinePast: Word('нахохлился', 3),
  femininePast: Word('нахохлилась', 3),
  neuterPast: Word('нахохлилось', 3),
  pluralPast: Word('нахохлились', 3),
  imperativeInformal: Word('нахохлись', 3),
  imperativeFormal: Word('нахохлитесь', 3),
  imperfect: [],
};

perfectVerbs.set(нахохлиться.name.text, нахохлиться);

export { нахохлиться };