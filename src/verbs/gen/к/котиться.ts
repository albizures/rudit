import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const котиться: PerfectVerb = {
  name: Word('котиться', 3),
  singular1stPerson: Word('кочусь', 3),
  singular2ndPerson: Word('котишься', 3),
  singular3rdPerson: Word('котится', 3),
  plural1stPerson: Word('котимся', 3),
  plural2ndPerson: Word('котитесь', 3),
  plural3rdPerson: Word('котятся', 3),
  masculinePast: Word('котился', 3),
  femininePast: Word('котилась', 3),
  neuterPast: Word('котилось', 3),
  pluralPast: Word('котились', 3),
  imperativeInformal: Word('котись', 3),
  imperativeFormal: Word('котитесь', 3),
  imperfect: [],
};

perfectVerbs.set(котиться.name.text, котиться);

export { котиться };