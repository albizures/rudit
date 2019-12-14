import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const розниться: PerfectVerb = {
  name: Word('розниться', 1),
  singular1stPerson: Word('рознюсь', 1),
  singular2ndPerson: Word('рознишься', 1),
  singular3rdPerson: Word('рознится', 1),
  plural1stPerson: Word('рознимся', 1),
  plural2ndPerson: Word('рознитесь', 1),
  plural3rdPerson: Word('рознятся', 1),
  masculinePast: Word('рознился', 1),
  femininePast: Word('рознилась', 1),
  neuterPast: Word('рознилось', 1),
  pluralPast: Word('рознились', 1),
  imperativeInformal: Word('рознись', 1),
  imperativeFormal: Word('рознитесь', 1),
  imperfect: [],
};

perfectVerbs.set(розниться.name.text, розниться);

export { розниться };