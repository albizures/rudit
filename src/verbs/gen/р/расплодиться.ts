import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплодиться: PerfectVerb = {
  name: Word('расплодиться', 7),
  singular1stPerson: Word('распложусь', 7),
  singular2ndPerson: Word('расплодишься', 7),
  singular3rdPerson: Word('расплодится', 7),
  plural1stPerson: Word('расплодимся', 7),
  plural2ndPerson: Word('расплодитесь', 7),
  plural3rdPerson: Word('расплодятся', 7),
  masculinePast: Word('расплодился', 7),
  femininePast: Word('расплодилась', 7),
  neuterPast: Word('расплодилось', 7),
  pluralPast: Word('расплодились', 7),
  imperativeInformal: Word('расплодись', 7),
  imperativeFormal: Word('расплодитесь', 7),
  imperfect: [],
};

perfectVerbs.set(расплодиться.name.text, расплодиться);

export { расплодиться };