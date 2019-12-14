import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отравиться: PerfectVerb = {
  name: Word('отравиться', 5),
  singular1stPerson: Word('отравлюсь', 6),
  singular2ndPerson: Word('отравишься', 3),
  singular3rdPerson: Word('отравится', 3),
  plural1stPerson: Word('отравимся', 3),
  plural2ndPerson: Word('отравитесь', 3),
  plural3rdPerson: Word('отравятся', 3),
  masculinePast: Word('отравился', 5),
  femininePast: Word('отравилась', 5),
  neuterPast: Word('отравилось', 5),
  pluralPast: Word('отравились', 5),
  imperativeInformal: Word('отравись', 5),
  imperativeFormal: Word('отравитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отравиться.name.text, отравиться);

export { отравиться };