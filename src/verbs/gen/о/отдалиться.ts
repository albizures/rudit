import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдалиться: PerfectVerb = {
  name: Word('отдалиться', 5),
  singular1stPerson: Word('отдалюсь', 5),
  singular2ndPerson: Word('отдалишься', 5),
  singular3rdPerson: Word('отдалится', 5),
  plural1stPerson: Word('отдалимся', 5),
  plural2ndPerson: Word('отдалитесь', 5),
  plural3rdPerson: Word('отдалятся', 5),
  masculinePast: Word('отдалился', 5),
  femininePast: Word('отдалилась', 5),
  neuterPast: Word('отдалилось', 5),
  pluralPast: Word('отдалились', 5),
  imperativeInformal: Word('отдались', 5),
  imperativeFormal: Word('отдалитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отдалиться.name.text, отдалиться);

export { отдалиться };